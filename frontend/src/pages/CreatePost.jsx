import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowLeftLine, RiImageAddLine } from "@remixicon/react";

const CreatePost = () => {
  const navigate = useNavigate();
  const [caption, setCaption] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    const formData = new FormData(e.target);

    try {
      await axios.post("http://localhost:3000/create-post", formData);
      e.target.reset(); 
      navigate('/'); 
    } catch (err) {
      console.error("Error:", err);
      alert("try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen relative shadow-sm border-x border-gray-100 flex flex-col">
        {/* Top Header */}
        <nav className="bg-white w-full border-b border-gray-200 h-14 px-4 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-6">
                <Link to="/" className="text-black"><RiArrowLeftLine size={28} /></Link>
                <h1 className="text-xl font-bold">New post</h1>
            </div>
            <button form="create-post-form" type="submit" disabled={isLoading} className={`font-semibold text-lg ${isLoading ? 'text-blue-300 cursor-not-allowed' : 'text-blue-500'}`}>
                {isLoading ? 'Sharing...' : 'Share'}
            </button>
        </nav>

        <form id="create-post-form" className="flex flex-col flex-grow" 
        onSubmit={submitHandler}>
            {/* Image Upload Area */}
            <div className="w-full aspect-square bg-gray-50 flex flex-col 
            items-center justify-center relative overflow-hidden border-b
             border-gray-200 transition-colors hover:bg-gray-100">
                {imagePreview ? (
                    <img src={imagePreview} alt="Preview" 
                    className="w-full h-full object-cover" />
                ) : (
                    <div className="flex flex-col items-center text-gray-400">
                        <RiImageAddLine size={64} className="mb-2 text-gray-300" />
                        <span className="font-medium text-lg text-gray-500">
                          Tap to upload photo
                          </span>
                    </div>
                )}
                <input 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    type="file" 
                    name="image" 
                    accept="image/*" 
                    onChange={handleImageChange}
                    required
                />
            </div>

            {/* Caption Area */}
            <div className="flex gap-3 p-4 border-b border-gray-200">
                <img src={`https://i.pravatar.cc/150?u=current_user`} alt="avatar" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                <textarea 
                    className="w-full outline-none resize-none pt-2 text-base placeholder-gray-400" 
                    name="caption" 
                    required 
                    placeholder="Write a caption..." 
                    rows={4}
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />
            </div>
            
            {/* Mock Settings */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center text-gray-700 cursor-pointer hover:bg-gray-50">
                <span className="font-medium text-[15px]">Add location</span>
                <span className="text-xl text-gray-400">›</span>
            </div>
            <div className="p-4 border-b border-gray-200 flex justify-between items-center text-gray-700 cursor-pointer hover:bg-gray-50">
                <span className="font-medium text-[15px]">Tag people</span>
                <span className="text-xl text-gray-400">›</span>
            </div>
        </form>
      </div>
    </section>
  )
}

export default CreatePost;
