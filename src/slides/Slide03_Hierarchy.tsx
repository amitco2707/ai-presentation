import SlideShell from "../components/SlideShell";
import RussianDoll from "../components/RussianDoll";

interface Props {
  active: boolean;
}

export default function Slide03_Hierarchy({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 04 — The Big Picture"
      title={<>Everything <span className="gradient-text">fits inside</span> something else.</>}
      subtitle="Terms like AI, ML, and Deep Learning aren't competing ideas — they nest, like Russian dolls."
    >
      <div className="mt-6 flex items-center justify-center">
        <RussianDoll active={active} />
      </div>
    </SlideShell>
  );
}
