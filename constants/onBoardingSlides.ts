export interface OnBoardingSlide {
    id: number;
    image: any;
    title: string;
    description: string;
    // image: string;
}

export const onBoardingSlides: OnBoardingSlide[] = [
  {
    id: 1,
    image: require("../assets/images/onboarding/slide1.png"),
    title: "Welcome to Habillify, expense partner.",
    description:
      "Whether it’s dinner with friends, shared rent, or group travel, Habillify helps you split costs fairly — so everyone pays exactly what they owe.",
  },
  {
    id: 2,
    image: require("../assets/images/onboarding/slide2.png"),
    title: "Split Bills with Ease",
    description:
      "Easily track and manage group expenses with friends, family, or roommates — no more confusion or missed payments!",
  },
  {
    id: 3,
    image: require("../assets/images/onboarding/slide3.png"),
    title: "Everyone Pays Their Share",
    description:
      "Habillify keeps everything transparent and fair. Know exactly who owes what — in real time.",
  },
  {
    id: 4,
    image: require("../assets/images/onboarding/slide4.png"),
    title: "Settle Up, Stress-Free",
    description:
      "Send and receive payments in seconds. No need to ask twice — Habilify makes it simple and quick.",
  },
];