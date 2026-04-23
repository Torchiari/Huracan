export default function Footer() {
  return (
    <footer className="w-full bg-black text-white text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Huracán Ciclista Club
      </p>
    </footer>
  );
}
