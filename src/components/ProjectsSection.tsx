
import React from 'react';
import ProjectCard from './ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Project data
const webProjects = [
  { title: "Crypto Currency Management System", icon: "💰" },
  { title: "Hospital Management System", icon: "🏥" },
  { title: "Pizza Delivery App", icon: "🍕" },
  { title: "Video Chat Platform", icon: "🎥" },
  { title: "Tourism Website", icon: "✈️" },
  { title: "School Management System", icon: "🏫" },
  { title: "Movie and Series Application", icon: "🎬" },
  { title: "Car Rental System", icon: "🚗" }
];

const aiProjects = [
  { title: "Music Recommendation System", icon: "🎵" },
  { title: "Gender and Age Detection", icon: "👤" },
  { title: "Fake News Detection", icon: "📰" },
  { title: "Heart Disease Prediction", icon: "❤️" },
  { title: "Driver Drowsiness Detection", icon: "🚦" }
];

const creativeProjects = [
  { title: "E-Voting System with Blockchain", icon: "🗳️" },
  { title: "Online Crime Reporting Portal", icon: "👮" },
  { title: "Smart Parking System", icon: "🅿️" },
  { title: "Weather Forecast App", icon: "🌦️" },
  { title: "E-Learning Platform", icon: "📚" },
  { title: "Personal Finance Tracker", icon: "💹" }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-vtu-blue">Our Project Collection</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Choose from our wide range of ready-made academic projects or contact us for custom project requirements.
        </p>

        <Tabs defaultValue="web" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="ai">AI/ML Projects</TabsTrigger>
            <TabsTrigger value="creative">Creative Ideas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="web">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {webProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  category="Web Development"
                  icon={project.icon}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  category="AI/ML"
                  icon={project.icon}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="creative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {creativeProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  category="Creative Solutions"
                  icon={project.icon}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-vtu-blue">Need Something Custom?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't see what you're looking for? We can create custom projects based on your requirements!
          </p>
          <a href="#contact">
            <button className="bg-vtu-accent hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
              Request Custom Project
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
