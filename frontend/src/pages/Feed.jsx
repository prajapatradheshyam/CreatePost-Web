import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { 
    RiHeartLine, 
    RiChat3Line, 
    RiSendPlaneLine, 
    RiBookmarkLine, 
    RiMoreLine,
    RiHome5Fill,
    RiSearchLine,
    RiAddBoxLine,
    RiMovieLine,
    RiUserLine,
    RiDeleteBinLine
} from "@remixicon/react";

function Feed() {
    const [posts, setPosts] = useState([
        {   
            _id: "1",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
            caption: "Beautiful sunset by the beach 🌊✨ #nature #vibes",
            user: "wanderlust_soul"
        }
    ]);

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((res) => {
            if (res.data.posts && res.data.posts.length > 0) {
                setPosts(res.data.posts);
            }
        }).catch((err) => {
            console.log("Error fetching posts, using dummy data.", err);
        });
    }, []);

    const handleDelete = async (id) => {
        // Optimistically remove post from UI
        setPosts(prevPosts => prevPosts.filter(post => post._id !== id));
        try {
            // Attempt to delete from backend (assuming /delete-post/:id or /posts/:id endpoint)
            await axios.delete(`http://localhost:3000/delete-post/${id}`);
        } catch (error) {
            console.error("Failed to delete from backend", error);
        }
    };

    return (
        <section className="bg-gray-50 min-h-screen pb-16 flex justify-center">
            <div className="w-full max-w-md bg-white min-h-screen relative shadow-sm border-x border-gray-100">
                {/* Top Header */}
                <nav className="bg-white w-full border-b border-gray-200 h-14 px-4 flex items-center justify-between sticky top-0 z-10">
                    <h1 className="text-xl font-bold">Post Create</h1>
                    <div className="flex items-center gap-4">
                        <RiHeartLine size={24} className="text-gray-800" />
                        <RiChat3Line size={24} className="text-gray-800" />
                    </div>
                </nav>

                {/* Posts Feed */}
                <div className="flex flex-col">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post._id} className="border-b border-gray-100 pb-2">
                                {/* Post Header */}
                                <div className="flex items-center justify-between p-3">
                                    <div className="flex items-center gap-2">
                                        <img src={`https://i.pravatar.cc/150?u=${post._id}`} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                                        <span className="font-semibold text-sm">{post.user || 'Anonymous'}</span>
                                    </div>
                                    <button onClick={() => handleDelete(post._id)} className="text-red-500 hover:text-red-700 transition-colors">
                                        <RiDeleteBinLine size={20} />
                                    </button>
                                </div>

                                {/* Post Image */}
                                <div className="w-full bg-black flex items-center justify-center max-h-[600px] overflow-hidden">
                                    <img className="w-full h-auto object-contain max-h-[600px]" src={post.image} alt={post.caption || "post"} />
                                </div>

                                {/* Post Actions */}
                                <div className="flex items-center justify-between px-3 py-2 mt-1">
                                    <div className="flex items-center gap-4">
                                        <RiHeartLine size={26} className="text-gray-800 hover:text-gray-500 cursor-pointer transition-colors" />
                                        <RiChat3Line size={26} className="text-gray-800 hover:text-gray-500 cursor-pointer transition-colors" />
                                        <RiSendPlaneLine size={26} className="text-gray-800 hover:text-gray-500 cursor-pointer transition-colors" />
                                    </div>
                                    <RiBookmarkLine size={26} className="text-gray-800 hover:text-gray-500 cursor-pointer transition-colors" />
                                </div>

                                {/* Likes & Caption */}
                                <div className="px-3 text-sm">
                                    <p className="font-semibold mb-1">{Math.floor(Math.random() * 1000) + 10} likes</p>
                                    <p>
                                        <span className="font-semibold mr-2">{post.user || 'Anonymous'}</span>
                                        {post.caption}
                                    </p>
                                    <p className="text-gray-500 mt-1 cursor-pointer">View all {Math.floor(Math.random() * 50) + 2} comments</p>
                                    <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-wide">2 hours ago</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                            <RiHome5Fill size={48} className="text-gray-300 mb-4" />
                            <h2 className="text-xl font-semibold">No Posts Yet</h2>
                        </div>
                    )}
                </div>

                {/* Bottom Navigation */}
                <nav className="bg-white w-full max-w-md border-t border-gray-200 h-14 flex items-center justify-around fixed bottom-0 z-10">
                    <Link to="/" className="text-black"><RiHome5Fill size={28} /></Link>
                    <RiSearchLine size={28} className="text-gray-800" />
                    <Link to="/create-post"><RiAddBoxLine size={28} className="text-gray-800" /></Link>
                    <RiMovieLine size={28} className="text-gray-800" />
                    <RiUserLine size={28} className="text-gray-800" />
                </nav>
            </div>
        </section>
    );
}

export default Feed;