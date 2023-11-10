import ButtonLink from "@/components/ButtonLink";
import SocialButtons from "@/components/SocialButtons";
import { RouteParams } from "@/interfaces/route";
import { getDictionary } from "@/lib/getDictionary";
import { getProfileData } from "@/services/getProfileData";
import { urlForImage } from "@sanity-local/lib/image";
import Image from "next/image";

export default async function Home({ params }: RouteParams) {
  const profileData = await getProfileData(params.lang);
  const t = await getDictionary(params.lang);

  return (
    <section className="h-[1000px]">
      <div className="flex flex-col gap-12">
        <div className="w-fit overflow-hidden rounded">
          <Image
            src={urlForImage(profileData.avatarImage)
              .format("webp")
              .width(100)
              .height(100)
              .url()}
            alt={profileData.name}
            width={100}
            height={100}
          />
        </div>
        <div className="max-w-[800px]">
          <h1 className="text-4xl">{profileData.heroTitle}</h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            {profileData.intro}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <SocialButtons socials={profileData.socials} />
          <ButtonLink className="w-64" href={`${profileData.curriculum}?dl=`}>
            {t.buttonCV}
          </ButtonLink>
        </div>
      </div>

      <div className="absolute right-4 top-24 flex items-center gap-3 self-start whitespace-nowrap rounded bg-green-700/10 px-4 py-2 text-green-500 sm:right-12 lg:top-12">
        <div className="h-2 w-2 rounded-full bg-current" />
        Open to work
      </div>
    </section>
  );
}
