import { Mail, Phone, MapPin } from "lucide-react";

const ContactMe = () => {
  return (
    <div className="w-full text-center pt-10 pb-8 bg-gradient-to-t from-[#3E2723] via-[#2E1A14] to-[#000000]">
      <h2 className="text-4xl font-extrabold text-amber-50 mb-4">
        ¿List@ para crear algo delicioso?
      </h2>
      <p className="text-orange-200 text-lg mb-8">
        Contactame para cocinar juntos tu próximo proyecto
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a
          href="mailto:adolfo199803@gmail.com"
          className="flex items-center gap-3 px-4 py-3 bg-gradient-to-bl from-[#8BC34A] via-[#558B2F] to-[#1B5E20] text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          <Mail className="w-5 h-5 " />
          adolfo199803@gmail.com
        </a>
        
        <a
          href="tel:+54 9 11 3251 6827"
          className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#FF6B35] via-[#FF5722] to-[#BF360C] text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          <Phone className="w-5 h-5" />
          +54 9 11 3251 6827
        </a>

        <div className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-lg">
          <MapPin className="w-5 h-5" />
          Buenos Aires, Argentina
        </div>
      </div>
      <p className="pt-10 italic text-lime-200">"El mejor código, como la mejor comida, se hace con amor y atención al detalle" 👨‍🍳💻</p>
      <p className="text-lime-200">© 2025 Adolfo Arellano Covarrubias</p>
    </div>
  );
};

export default ContactMe;