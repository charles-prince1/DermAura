import React, { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, User, Building, Settings, ShieldCheck } from 'lucide-react';

const STEPS = [
  { id: 1, title: 'Account', subtitle: 'Basic Details', icon: User },
  { id: 2, title: 'Profile', subtitle: 'Work Info', icon: Building },
  { id: 3, title: 'Preferences', subtitle: 'Tailor Experience', icon: Settings },
  { id: 4, title: 'Verify', subtitle: 'Final Check', icon: ShieldCheck },
];

export default function SignupWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'Developer',
    company: '',
    useCase: 'Personal',
    theme: 'Dark',
    termsAccepted: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Simple validation to check if current step can proceed
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName.trim() !== '' && formData.email.includes('@') && formData.password.length >= 6;
      case 2:
        return formData.company.trim() !== '';
      case 3:
        return true;
      case 4:
        return formData.termsAccepted;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto mt-12 p-8 bg-slate-900 border border-slate-800 rounded-2xl text-center shadow-xl">
        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
          <Check className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Welcome aboard, {formData.fullName}!</h2>
        <p className="text-slate-400 mb-6">
          Your account has been created. We've sent a verification link to <span className="text-slate-200">{formData.email}</span>.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
          }}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100">
      {/* Header & Stepper Progress */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Create your account</h1>
        <p className="text-sm text-slate-400 mb-6">Step {currentStep} of {STEPS.length}</p>

        {/* Stepper Bar */}
        <div className="grid grid-cols-4 gap-2">
          {STEPS.map((step) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.id;
            const isCurrent = currentStep === step.id;

            return (
              <div key={step.id} className="flex flex-col gap-2">
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isCompleted || isCurrent ? 'bg-indigo-500' : 'bg-slate-800'
                  }`}
                />
                <div className="hidden sm:flex items-center gap-2 mt-1">
                  <div
                    className={`p-1.5 rounded-md ${
                      isCurrent
                        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                        : isCompleted
                        ? 'text-emerald-400'
                        : 'text-slate-500'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className={`text-xs font-semibold ${isCurrent ? 'text-white' : 'text-slate-400'}`}>
                      {step.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="min-h-[260px] flex flex-col justify-between">
        {/* STEP 1: Account */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => updateFormData('fullName', e.target.value)}
                placeholder="John Doe"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 text-sm text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="john@example.com"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 text-sm text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => updateFormData('password', e.target.value)}
                placeholder="At least 6 characters"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 text-sm text-white"
              />
            </div>
          </div>
        )}

        {/* STEP 2: Profile */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Company / Organization</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => updateFormData('company', e.target.value)}
                placeholder="Acme Corp"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 text-sm text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Primary Role</label>
              <select
                value={formData.role}
                onChange={(e) => updateFormData('role', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 text-sm text-white"
              >
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Executive">Executive</option>
              </select>
            </div>
          </div>
        )}

        {/* STEP 3: Preferences */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">Primary Use Case</label>
              <div className="grid grid-cols-2 gap-3">
                {['Personal', 'Team Work', 'Enterprise', 'Education'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateFormData('useCase', option)}
                    className={`p-3 text-left rounded-lg border text-sm transition-all ${
                      formData.useCase === option
                        ? 'border-indigo-500 bg-indigo-500/10 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Verification */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 text-sm space-y-2">
              <p className="text-slate-400"><strong className="text-white">Name:</strong> {formData.fullName}</p>
              <p className="text-slate-400"><strong className="text-white">Email:</strong> {formData.email}</p>
              <p className="text-slate-400"><strong className="text-white">Company:</strong> {formData.company}</p>
              <p className="text-slate-400"><strong className="text-white">Role:</strong> {formData.role}</p>
            </div>

            <label className="flex items-center gap-3 cursor-pointer pt-2">
              <input
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={(e) => updateFormData('termsAccepted', e.target.checked)}
                className="w-4 h-4 rounded border-slate-700 text-indigo-600 focus:ring-indigo-500 bg-slate-950"
              />
              <span className="text-xs text-slate-300">
                I agree to the <a href="#" className="text-indigo-400 underline">Terms of Service</a> and <a href="#" className="text-indigo-400 underline">Privacy Policy</a>.
              </span>
            </label>
          </div>
        )}

        {/* Navigation Actions */}
        <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-800">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              currentStep === 1
                ? 'opacity-0 cursor-default'
                : 'text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800'
            }`}
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-lg transition-all ${
              isStepValid()
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            {currentStep === STEPS.length ? 'Complete Setup' : 'Continue'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}