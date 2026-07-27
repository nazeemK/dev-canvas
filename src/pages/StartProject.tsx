import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import OnboardingShell from "@/components/onboarding/OnboardingShell";
import ProjectTypeStep from "@/components/onboarding/steps/ProjectTypeStep";
import BusinessInfoStep from "@/components/onboarding/steps/BusinessInfoStep";
import ProjectScopeStep from "@/components/onboarding/steps/ProjectScopeStep";
import ContactStep from "@/components/onboarding/steps/ContactStep";
import { usePageMeta } from "@/hooks/usePageMeta";
import { submitProjectInquiry } from "@/lib/submitProjectInquiry";
import { useLocale } from "@/i18n";
import {
  initialOnboardingData,
  OnboardingData,
} from "@/types/onboarding";

const SubmissionSuccess = () => {
  const { t } = useLocale();
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
        {t.onboarding.successLabel}
      </p>
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">{t.onboarding.successTitle}</h1>
      <p className="mb-10 max-w-md font-mono text-sm text-muted-foreground">
        {t.onboarding.successBlurb}
      </p>
      <Link
        to="/"
        className="font-mono text-sm uppercase tracking-widest rounded-full bg-primary px-8 py-3.5 text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_hsl(68,100%,50%,0.3)]"
        data-cursor-hover
      >
        {t.onboarding.backToSite}
      </Link>
    </div>
  );
};

const StartProject = () => {
  const { t } = useLocale();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(initialOnboardingData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const steps = t.onboarding.steps;
  const stepCopy = t.onboarding.stepCopy;

  usePageMeta({
    title: t.seo.startProject.title,
    description: t.seo.startProject.description,
    path: "/start-project",
  });

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

  const handleNext = async () => {
    if (step < steps.length - 1) {
      setSubmitError(null);
      setStep((s) => s + 1);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      await submitProjectInquiry(data, {
        formNotSetup: t.onboarding.formNotSetup,
        submitFailed: t.onboarding.submitFailedWhatsApp,
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : t.onboarding.submitFailed,
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return <SubmissionSuccess />;
  }

  const current = steps[step];
  const copy = stepCopy[step];

  return (
    <OnboardingShell
      stepLabel={current.label}
      stepIndex={step}
      totalSteps={steps.length}
      title={copy.title}
      description={copy.description}
      onPrevious={step > 0 ? () => setStep((s) => s - 1) : undefined}
      onNext={handleNext}
      nextLabel={step === steps.length - 1 ? t.onboarding.submit : t.onboarding.next}
      nextDisabled={!canProceed()}
      nextLoading={submitting}
      error={submitError}
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
