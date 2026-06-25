import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import OnboardingShell from "@/components/onboarding/OnboardingShell";
import ProjectTypeStep from "@/components/onboarding/steps/ProjectTypeStep";
import BusinessInfoStep from "@/components/onboarding/steps/BusinessInfoStep";
import ProjectScopeStep from "@/components/onboarding/steps/ProjectScopeStep";
import ContactStep from "@/components/onboarding/steps/ContactStep";
import { usePageMeta } from "@/hooks/usePageMeta";
import { pageMeta } from "@/lib/seo";
import {
  initialOnboardingData,
  ONBOARDING_STEPS,
  OnboardingData,
} from "@/types/onboarding";

const stepCopy = [
  {
    title: "What are you looking to build?",
    description:
      "Select one or more options that fit your needs. This helps me understand the scope before we talk.",
  },
  {
    title: "Tell me about your business",
    description:
      "A few details about who you are and how your team is set up - solo founder or full company, it all counts.",
  },
  {
    title: "What's the scope looking like?",
    description:
      "Rough budget and timeline help me gauge fit and prioritise the right approach for your project.",
  },
  {
    title: "Almost there - how do I reach you?",
    description:
      "Leave your contact details and I'll get back to you within 24 hours with next steps.",
  },
];

const SubmissionSuccess = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12 },
    );
  }, []);

  return (
    <div
      ref={ref}
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center"
    >
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
        // submission received
      </p>
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Thanks - I'll be in touch.</h1>
      <p className="mb-10 max-w-md font-mono text-sm text-muted-foreground">
        Your project details are in. Expect a reply within 24 hours.
      </p>
      <Link
        to="/"
        className="font-mono text-sm uppercase tracking-widest rounded-full bg-primary px-8 py-3.5 text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_hsl(68,100%,50%,0.3)]"
        data-cursor-hover
      >
        Back to site
      </Link>
    </div>
  );
};

const StartProject = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(initialOnboardingData);
  const [submitted, setSubmitted] = useState(false);
  usePageMeta(pageMeta.startProject);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const update = (patch: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...patch }));
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return data.projectTypes.length > 0;
      case 1:
        return Boolean(data.businessName.trim() && data.teamSize && data.organizationType);
      case 2:
        return Boolean(data.budget && data.timeline);
      case 3:
        return Boolean(
          data.contactName.trim() && data.email.trim() && data.phone.trim(),
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (step < ONBOARDING_STEPS.length - 1) {
      setStep((s) => s + 1);
      return;
    }

    // Placeholder - wire to API / email service later
    console.info("Project inquiry submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return <SubmissionSuccess />;
  }

  const current = ONBOARDING_STEPS[step];
  const copy = stepCopy[step];

  return (
    <OnboardingShell
      stepLabel={current.label}
      stepIndex={step}
      totalSteps={ONBOARDING_STEPS.length}
      title={copy.title}
      description={copy.description}
      onPrevious={step > 0 ? () => setStep((s) => s - 1) : undefined}
      onNext={handleNext}
      nextLabel={step === ONBOARDING_STEPS.length - 1 ? "Submit project" : "Next step"}
      nextDisabled={!canProceed()}
      showPrevious={step > 0}
    >
      {step === 0 && (
        <ProjectTypeStep
          data={data}
          onChange={(projectTypes) => update({ projectTypes })}
        />
      )}
      {step === 1 && <BusinessInfoStep data={data} onChange={update} />}
      {step === 2 && <ProjectScopeStep data={data} onChange={update} />}
      {step === 3 && <ContactStep data={data} onChange={update} />}
    </OnboardingShell>
  );
};

export default StartProject;
