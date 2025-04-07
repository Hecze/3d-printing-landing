import { LucideIcon } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-teal-400/50 transition-all duration-300">
      <div className="bg-teal-400/10 p-3 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}
