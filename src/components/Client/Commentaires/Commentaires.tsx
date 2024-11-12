import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Données d'exemple pour les commentaires
const commentaires = [
  {
    nom: "Jean Dupont",
    photoDeProfil: "https://via.placeholder.com/50", // remplacer par les URLs réelles des images
    commentaire:
      "Le service est excellent et j'ai vraiment apprécié mon expérience !",
    score: 5,
    emploi: "Entrepreneur",
  },
  {
    nom: "Marie Dubois",
    photoDeProfil: "https://via.placeholder.com/50",
    commentaire: "L'équipe a été très serviable et le processus a été fluide.",
    score: 4,
    emploi: "Chef de projet",
  },
  {
    nom: "Alex Martin",
    photoDeProfil: "https://via.placeholder.com/50",
    commentaire:
      "Je recommande fortement ! Un support et un service fantastiques.",
    score: 5,
    emploi: "Consultant",
  },
  {
    nom: "Sophie Bernard",
    photoDeProfil: "https://via.placeholder.com/50",
    commentaire: "Ils ont dépassé toutes mes attentes !",
    score: 5,
    emploi: "Designer",
  },
  {
    nom: "Chris Moreau",
    photoDeProfil: "https://via.placeholder.com/50",
    commentaire:
      "Professionnels, fiables, et amicaux. Je ferai de nouveau appel à eux !",
    score: 4,
    emploi: "Développeur",
  },
];

const Commentaires = () => {
  return (
    <div className="mt-10 text-center bg-gradient-to-r from-[#E0F7FA] to-[#D1C4E9] py-12">
      {/* Background gradient for the entire section */}

      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ce que nos clients disent de nous
        </h2>
        <p className="text-lg text-gray-600">
          Découvrez les témoignages de ceux qui ont déjà fait l'expérience de
          notre service.
        </p>
      </div>

      {/* Customer Reviews Carousel */}
      <Carousel className="w-full max-w-md mx-auto mb-12">
        <CarouselContent>
          {commentaires.map((commentaire, index) => (
            <CarouselItem key={index}>
              <div className="p-3">
                <Card className="shadow-lg rounded-xl transition-transform transform hover:scale-105 h-72">
                  {/* Fixed height for card */}
                  <CardContent className="flex flex-col items-start p-6 space-y-4 bg-gradient-to-r from-[#c1d9f5] to-[#d6a6ff] rounded-lg">
                    {/* Soft gradient background */}
                    <div className="flex items-center space-x-4">
                      {/* Photo de Profil */}
                      <img
                        src={commentaire.photoDeProfil}
                        alt={`Profil de ${commentaire.nom}`}
                        className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                      />
                      <div className="flex flex-col">
                        {/* Nom */}
                        <h3 className="text-xl font-semibold text-gray-800">
                          {commentaire.nom}
                        </h3>
                        {/* Job Title */}
                        <p className="text-sm text-gray-600">
                          {commentaire.emploi}
                        </p>
                      </div>
                    </div>

                    {/* Rating (Stars) */}
                    <div className="flex space-x-1">
                      {[...Array(commentaire.score)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          &#9733;
                        </span>
                      ))}
                    </div>

                    {/* Commentaire */}
                    <p className="text-lg font-bold text-gray-800">
                      "{commentaire.commentaire}"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Call to Action */}
      <div className="mt-8">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
          Laisser un avis
        </button>
      </div>

      {/* Customer Testimonials Grid (below carousel) */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-3">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-800">"Un service rapide et fiable!"</p>
          <p className="text-sm text-gray-600 mt-2">
            — Jean Dupont, Entrepreneur
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-800">
            "Je recommande vivement cette équipe !"{" "}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            — Sophie Bernard, Designer
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-800">
            "Excellente expérience, très professionnel !"
          </p>
          <p className="text-sm text-gray-600 mt-2">
            — Chris Moreau, Développeur
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commentaires;
