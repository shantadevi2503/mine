import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const VideoPage = () => {
    // Dynamically require all videos from the Videos folder
    const importAll = (r) => {
        return r.keys().map(r);
    };

    // Use require.context to load all videos
    const videos = importAll(require.context('./Videos', false, /\.(mp4)$/));

    // State to manage the clicked video for modal
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Function to close the modal
    const closeModal = () => {
        setSelectedVideo(null);
    };

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/home');
    };

    return (
        <div className="p-8">
            {/* Centered and bold title */}
            <h1 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-8">Videos</h1>
            <div className="relative">
                <button className="text-black font-extrabold text-lg uppercase bg-none ml-20 border-none focus:outline-none relative cursor-pointer transition-all duration-400 ease-out hover:text-white after:absolute after:content-[''] after:h-[2px] after:bg-white after:left-1/2 after:bottom-[-2px] after:w-0 after:transition-all after:duration-400 hover:after:left-0 hover:after:w-full " onClick={handleBackClick}>
                    &larr; Back
                </button>
            </div>

            {/* Responsive grid layout */}
            <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {videos.map((video, index) => (
                    <div key={index} className="w-full h-[400px] cursor-pointer" onClick={() => setSelectedVideo(video)}>
                        {/* Display video thumbnails */}
                        <video
                            src={video}
                            alt={`Video ${index + 1}`}
                            className="w-full h-full object-cover"
                            controls
                        />
                    </div>
                ))}
            </div>

            {/* Modal to show selected video and download option */}
            {selectedVideo && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl">
                        <button className="text-red-500 mb-4" onClick={closeModal}>
                            Close
                        </button>
                        {/* Display the selected video in the modal */}
                        <video src={selectedVideo} className="w-full h-full object-cover mb-4" controls />
                        <a
                            href={selectedVideo}
                            download
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                            Download Video
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPage;
