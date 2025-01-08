import { useRouter } from 'next/navigation';

export default function useGoToSection(section: string) {
  const router = useRouter();

  const goToSection = () => {
    router.push(`/#${section}`);
  };

  return goToSection;
}
