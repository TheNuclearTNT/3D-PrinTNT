export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  model?: string; // Path to 3D model file (.glb, .gltf)
  gallery?: string[];
  category: "3D Model" | "3D Print";
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  printTime?: string;
  materials?: {
    material: string;
    layerHeight: string;
    infill: string;
    support: string;
  };
  process?: string[];
  featured?: boolean;
}
