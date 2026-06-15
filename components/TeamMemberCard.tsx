import Image from "next/image";

export function TeamMemberCard({
  member,
}: {
  member: {
    name: string;
    role: string;
    image: string;
    imagePosition: string;
    school: string;
    bio: string;
  };
}) {
  return (
    <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
      <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={member.image}
          alt={`${member.name} of StarBro's Services`}
          fill
          className="object-cover"
          style={{ objectPosition: member.imagePosition }}
          sizes="(max-width: 640px) 44vw, (max-width: 1024px) 38vw, 280px"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold text-black sm:text-2xl">
          {member.name}
        </h2>
        <p className="mt-1 text-[10px] font-semibold uppercase leading-4 tracking-wide text-brand-500 min-[375px]:text-xs sm:text-sm">
          {member.role}
        </p>
        <p className="mt-2 text-[10px] font-semibold leading-4 text-slate-800 min-[375px]:text-xs sm:mt-3 sm:text-sm sm:leading-6">
          {member.school}
        </p>
        <p className="mt-3 text-[10px] leading-4 text-slate-600 min-[375px]:text-xs min-[375px]:leading-5 sm:text-base sm:leading-7">
          {member.bio}
        </p>
      </div>
    </article>
  );
}
