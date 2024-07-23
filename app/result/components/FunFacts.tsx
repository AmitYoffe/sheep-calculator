import Typewriter from "typewriter-effect";

export default function FunFacts() {
  const facts = [
    `The value of a sheep can vary widely depending on factors such as breed, age, health,
      and location. Historically, in barter economies, the value of a sheep would be negotiated based on its usefulness for wool, meat, milk, and breeding.
      In modern times, the value of a sheep is often influenced by market conditions and specific characteristics of the sheep.
      As of recent data, the price of a sheep in the United States can range from around $150 to $300 per head,
      although high-quality breeding sheep or those with specific desirable traits can be worth significantly more.`,
    `Did you know that sheep are excellent at recognizing and distinguishing between faces? In one study, scientists had sheep distinguish between the faces of celebrities such as Barack Obama, Emma Watson, and Jake Gyllenhaal! Many were able to still recognize the face after the picture had been altered or they were shown a different angle.`,
    `Sheep have a great sense of smell, and have special scent glands located in front of their eyes and between the digits of their hooves to help them out! Mothers learn to identify their babies by their unique scent.`,
    `Sheep also have a great sense of taste, and can even use this sense to discriminate between plants and substances for the purpose of self-medication! This is an example of a behavior called Zoopharmacognosy, where non-human animals seek out plants, insects, certain types of soil and other things to medicate themselves for ailments like stomach upset and high parasite loads!`,
    `What about sight? Sheep have amazing peripheral vision. Their field of vision is nearly 360 degrees! They cannot see directly behind them, but otherwise have a very impressive visual range, especially when their head is lowered to graze!`,
    `Sheep have a nifty little split in their upper lip to help them choose the plants they consume! You know what they don’t have though? Front teeth in their upper jaw!`,
    `Sheep memories are also pretty great. They can recognize up to 50 sheep faces and remember them for two years!`,
    `Turn that frown upside down! Sheep can distinguish between a smile and a frown on human faces, and prefer smiles much like us.`,
    `Sheep are quite clever! They can navigate mazes and have been found to use their excellent memory to memorize how to get through them quickly!`,
    `Not only do sheep form friendships, it appears they have some capacity for forming mental images of the faces of other individuals. We don’t know to what extent they experience this but, for humans, it would be similar to thinking about a good friend you are missing and picturing their face.`,
    `Sheep can see violet, blue, cyan, green, yellow, and orange. While they technically have the ability to see a little bit of red, they are red-green colorblind, so can’t distinguish between those colors. `,
  ];

  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  return (
    <div className="flex flex-col max-w-xl p-3">
      <h1 className="text-xl font-bold tracking-tighter md:text-2xl/tight mb-1">
        Random sheep fact:
      </h1>
      <Typewriter
        options={{
          delay: 8,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(randomFact).start();
        }}
      />
    </div>
  );
}
