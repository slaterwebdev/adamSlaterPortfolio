import profilePic from "../../assets/profilePic.png";

export const Home = () => (
    <section className="flex h-full justify-center flex-col md:flex-row">
        <div className="flex items-center">
            <div className="text-slate-500 font-playfair flex flex-col gap-5">
                <header className="mb-8">
                    <h3 className="font-sans text-lg mb-4">HELLO, MY NAME IS</h3>
                    <div className="h-1 bg-slate-400 w-20"></div>
                </header>
                <h1 className="text-5xl md:text-8xl font-bold text-black leading-tight">Adam Slater</h1>
                <h2 className="text-3xl md:text-4xl font-semibold">Full-Stack Dev</h2>
            </div>
        </div>

        <div className="flex items-center justify-end">
            {/* <div className="rounded-full bg-emerald-950 h-min"> */}
                <img
                    src={profilePic}
                    alt="Adam Slater profile picture"
                    className="object-cover w-full max-w-md"
                    loading="lazy"
                />
                {/* REPLACE PROFILE PIC WITH PROPER IMG WHEN ITS READY */}
            {/* </div> */}
        </div>
    </section>
);
