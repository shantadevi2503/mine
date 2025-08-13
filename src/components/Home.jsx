import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [typeEffect] = useTypewriter({
        words: ['Ammu', 'Ma', 'Princess', 'Thangooo', 'Papa', 'Queen', 'Love', 'Madam', 'Loosu', 'panni', 'korangu', 'eruma'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 1000,
    })

    const navigate = useNavigate();

    const handlePhotosClick = () => {
        navigate('/photos');
    };

    const handleMemoriesClick = () => {
        navigate('/memories');
    };

    const handleVideosClick = () => {
        navigate('/videos');
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 m-4 md:m-0"> {/* Margin for mobile */}
            <div
                className="text-black p-6 w-full max-w-16xl px-auto text-left text-2xl font-bold border-2 border-black rounded-xl 
                md:p-8 md:text-4xl md:max-w-3xl md:my-10"
                style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                }}
            >
                <h1 className="text-left text-2xl md:text-4xl"> Hello <span className="text-pink-600">{typeEffect}</span></h1>
                <p className="break-words text-base md:text-2xl mt-4">
                    Eppadi iruka? Ofc nala irupa..... iniku enna edha pakkam enna pakalanu vandhinga iniku.... Photos ahh? illa Videos ahh? illa na Memories ehh? or Reason for loving you ehh?
                    enna venum nu sollu ellamyeh inga iruku...... jst oru button dhan ellameyhh un kannu mundai vandhu nikum.....
                    bt adhuvum illna u can call me anytime.... rmba vty ehh dhan irupen.... for contact call
                    <span className="text-pink-600"> 8667410621</span> or even mail is fine with me Mail id: <span className="text-pink-600">sara.pavansriram@gmail.com</span>
                    ....... eppadiyum varadhuu....ana adhuku nu pannnama irukadha dii loooosu .....odeneh pannau ...oruthan inga summa pesama paavam ....photo kitaa pesitu iruak ...pathiyam aagurathuku moonadii cl pannidu ...illlana uanku dhan perchana paathuko ...rmba perchana.....bt irudhalum oru try dhan......seri okayy ejoyy ur day.... and have a lot of fun......
                </p>
                <p className="text-2xl md:text-4xl mt-6">
                    I LOVEEEEEEE YOUUUUUUU SOOOOOOOO MUCHHHHHHHH <span className="text-pink-600">{typeEffect}</span>
                </p>
            </div>


            {/* Buttons section */}
            <div className='flex flex-col md:flex-row justify-evenly w-full max-w-7xl gap-6'> {/* Flex column for mobile, row for larger screens */}
                {/* Photos Button */}
                <button
                    className="group duration-500 relative h-16 w-64 border-2 text-left p-3 text-black text-xl font-bold rounded-lg overflow-hidden 
                    border-black hover:border-black 
                    before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  
                    after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg 
                    underline underline-offset-2 hover:underline hover:underline-offset-4 
                    hover:before:-bottom-8 hover:before:blur hover:before:right-12 hover:after:-right-8 hover:before:duration-500 hover:after:duration-500"
                    style={{
                        background: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    }}
                    onClick={handlePhotosClick}
                >
                    Photos
                </button>

                {/* Videos Button */}
                <button
                    className="group duration-500 relative h-16 w-64 border-2 text-left p-3 text-black text-xl font-bold rounded-lg overflow-hidden 
                    border-black hover:border-black 
                    before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  
                    after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg 
                    underline underline-offset-2 hover:underline hover:underline-offset-4 
                    hover:before:-bottom-8 hover:before:blur hover:before:right-12 hover:after:-right-8 hover:before:duration-500 hover:after:duration-500"
                    style={{
                        background: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    }}
                    onClick={handleVideosClick}
                >
                    Videos
                </button>

                {/* Memories Button */}
                <button
                    className="group duration-500 relative h-16 w-64 border-2 text-left p-3 text-black text-xl font-bold rounded-lg overflow-hidden 
                    border-black hover:border-black 
                    before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  
                    after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg 
                    underline underline-offset-2 hover:underline hover:underline-offset-4 
                    hover:before:-bottom-8 hover:before:blur hover:before:right-12 hover:after:-right-8 hover:before:duration-500 hover:after:duration-500"
                    style={{
                        background: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    }}
                    onClick={handleMemoriesClick}
                >
                    Memories
                </button>

                {/* Reasons Button */}
                <button
                    className="group duration-500 relative h-16 w-64 border-2 text-left p-3 text-black text-xl font-bold rounded-lg overflow-hidden 
                    border-black hover:border-black 
                    before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  
                    after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg 
                    underline underline-offset-2 hover:underline hover:underline-offset-4 
                    hover:before:-bottom-8 hover:before:blur hover:before:right-12 hover:after:-right-8 hover:before:duration-500 hover:after:duration-500"
                    style={{
                        background: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    }}
                >
                    Reasons
                </button>
            </div>
        </div>
    )
}

export default Home;
