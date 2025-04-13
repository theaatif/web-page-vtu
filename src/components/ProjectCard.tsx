
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface ProjectCardProps {
  title: string;
  category: string;
  description?: string;
  icon: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, description, icon }) => {
  // Function to create a WhatsApp message with the project title
  const createWhatsAppLink = () => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${title} project from VTU PROJECTS!`);
    return `https://wa.me/919449163009?text=${message}`;
  };

  return (
    <Card className="project-card h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="text-4xl mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="text-sm font-medium text-vtu-lightBlue">{category}</div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">
          {description || "Get this project with complete source code and setup support."}
        </p>
      </CardContent>
      <CardFooter>
        <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full border-vtu-blue text-vtu-blue hover:bg-blue-50">
            Inquire Now
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
