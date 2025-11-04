import { getContentData } from './utilities/content';
import ReactMarkdown from 'react-markdown';

export default async function Home() {
    const data = await getContentData();
    const { profile, skills, projects, navigation } = data;

    // Find the resume link from navigation
    const resumeLink = navigation.find(link => link.label === 'Resume');

    const markdownComponents = {
        p: ({node, ...props}: any) => (
            <p className='text-lg text-gray-600 dark:text-gray-300 space-y-6' {...props} />
        ),
    };

    return (
        <div className="flex flex-col items-center max-w-2xl text-center gap-12 sm:gap-16 mx-auto w-full"> 

            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary to-brand-primary sm:text-6xl">
                    {profile.name}
                </h1>
                <p className="pt-2 uppercase text-base tracking-widest font-medium text-gray-400">
                    {profile.title}
                </p>
            </div>

            <section className="text-lg text-gray-600 dark:text-gray-300 space-y-6">
                <ReactMarkdown components={markdownComponents}>
                    {profile.bio_markdown}
                </ReactMarkdown>

                <div className="mt-8 flex justify-center gap-4">
                    {projects && projects.length > 0 && (
                        <a href="/projects" className="px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition duration-300 bg-brand-primary text-white hover:bg-brand-primary/90">
                            View My Projects
                        </a>
                    )}
                    {resumeLink && (
                        <a
                          href={resumeLink.href}
                          target={resumeLink.external ? "_blank" : "_self"}
                          rel={resumeLink.external ? "noopener noreferrer" : undefined}
                          className="px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition duration-300 border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10 hover:text-brand-primary dark:hover:bg-brand-secondary/10"
                        >
                          View Resume
                        </a>
                    )}
                </div>
            </section>

            <section className="w-full pt-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                    Key Skills
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill: string) => (
                        <span 
                            key={skill}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1.5 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
}