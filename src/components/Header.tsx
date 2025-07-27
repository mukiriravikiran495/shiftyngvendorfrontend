import { Truck } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#A7C0E1] text-header-foreground h-16 flex items-center px-6 border-b">
      <div className="flex items-center gap-3">
        <Truck className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>Shiftyng</h1>
      </div>
    </header>
  );
};

export default Header;