import doctorPhoto from "../assets/doctor-male.jpg";

export default function DoctorIllustration({ className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-full bg-[#EAF4FC] ${className}`}
      role="img"
      aria-label="Foto dokter"
    >
      <img
        src={doctorPhoto}
        alt="Foto dokter"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
