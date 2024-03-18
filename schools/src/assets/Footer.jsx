export const Footer = () => {
  return (
    <footer className="flex flex-col max-w-full h-20 mx-auto justify-center items-center bg-[#000000] fixed bottom-0 w-full">
      <p className="text-white text-sm">
        © prueba INTERRAPIDISIMO Media Direct, LLC. All rights reserved
      </p>
      <div className="flex mt-4 justify-between items-center mx-auto gap-4">
        <div className="text-white text-sm">Privacy</div>

        <div className="text-white text-sm">Terms</div>

        <div className="text-white text-sm">Help</div>

        <div className="text-white text-sm">Devices</div>
      </div>
    </footer>
  );
};
