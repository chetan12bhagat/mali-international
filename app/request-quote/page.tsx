"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { quoteFormSchema, QuoteFormData } from "@/lib/validation";
import { agriculturalProducts, getProductBySlug } from "@/data/products";

function QuoteForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") || "";
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Match initial product from query slug or name
  const matchedProduct = productParam
    ? getProductBySlug(productParam) ||
      agriculturalProducts.find(
        (p) => p.name.toLowerCase() === productParam.toLowerCase()
      )
    : undefined;

  const defaultProductName = matchedProduct
    ? matchedProduct.variant
      ? `${matchedProduct.name} (${matchedProduct.variant})`
      : matchedProduct.name
    : productParam;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      product: defaultProductName || "",
      unit: matchedProduct?.rateUnit?.replace("/", "").trim() || "Metric Tons (MT)",
      destination: matchedProduct?.destination || "",
      packaging: matchedProduct?.packaging || "",
    },
  });

  // When query param updates
  useEffect(() => {
    if (defaultProductName) {
      setValue("product", defaultProductName);
    }
    if (matchedProduct?.destination) {
      setValue("destination", matchedProduct.destination);
    }
    if (matchedProduct?.packaging) {
      setValue("packaging", matchedProduct.packaging);
    }
  }, [defaultProductName, matchedProduct, setValue]);

  const onSubmit = async (data: QuoteFormData) => {
    try {
      console.log("Commercial Quote Request:", data);
      setSubmitted(true);
      setError(false);
    } catch {
      setError(true);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-slate-200 text-dark-text text-[0.9375rem] rounded-[3px] outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors placeholder:text-slate-400";
  const labelClasses = "block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5";
  const errorClasses = "text-xs text-red-500 mt-1";

  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-12 border border-light-gray rounded-[4px] text-center shadow-xs">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">Quote Request Received</h3>
        <p className="text-muted text-sm md:text-base max-w-md mx-auto mb-6">
          Thank you for sharing your requirements. Our export trade desk is preparing your indicative commercial proposal and will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs font-semibold uppercase tracking-wider text-gold hover:underline"
        >
          Submit Another Requirement →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 md:p-10 border border-slate-200 rounded-[4px] shadow-xs"
    >
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-sm text-red-600 rounded-[3px]">
          Something went wrong. Please try again or contact our trade desk directly.
        </div>
      )}

      {/* Pre-selected Product Banner if arriving with ?product= */}
      {matchedProduct && (
        <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-[3px] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-gold uppercase tracking-wider block">
              Pre-selected Commodity
            </span>
            <span className="text-sm font-bold text-navy">
              {matchedProduct.name} {matchedProduct.variant && `(${matchedProduct.variant})`}
            </span>
            <span className="text-xs text-slate-500 block">
              Origin: {matchedProduct.origin || "India"} · {matchedProduct.availability || "Available for Export"}
            </span>

          </div>
          <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-[2px] font-semibold border border-emerald-200">
            Active Selection
          </span>
        </div>
      )}

      {/* Section 1: Product Specifications */}
      <div className="mb-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-navy pb-3 border-b border-slate-100 mb-5">
          1. Commodity &amp; Sourcing Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {/* Product selection */}
          <div>
            <label htmlFor="product" className={labelClasses}>
              Product / Commodity *
            </label>
            <input
              id="product"
              list="productList"
              {...register("product")}
              placeholder="Select or enter product name..."
              className={inputClasses}
            />
            <datalist id="productList">
              {agriculturalProducts.map((p) => (
                <option key={p.id} value={p.variant ? `${p.name} (${p.variant})` : p.name} />
              ))}
            </datalist>
            {errors.product && <p className={errorClasses}>{errors.product.message}</p>}
          </div>

          {/* Quantity */}
          <div>
            <label htmlFor="quantity" className={labelClasses}>
              Quantity Required
            </label>
            <input
              id="quantity"
              {...register("quantity")}
              placeholder="e.g., 500, 2 containers, 10 FCL"
              className={inputClasses}
            />
          </div>

          {/* Unit */}
          <div>
            <label htmlFor="unit" className={labelClasses}>
              Unit
            </label>
            <input
              id="unit"
              {...register("unit")}
              placeholder="Boxes, Bags, Metric Tons (MT), kg"
              className={inputClasses}
            />
          </div>

          {/* Destination Port */}
          <div>
            <label htmlFor="destination" className={labelClasses}>
              Destination Port / Country
            </label>
            <input
              id="destination"
              {...register("destination")}
              placeholder="e.g., Jebel Ali, Dubai / Rotterdam / Singapore"
              className={inputClasses}
            />
          </div>

          {/* Packaging Requirement */}
          <div>
            <label htmlFor="packaging" className={labelClasses}>
              Packaging Requirement
            </label>
            <input
              id="packaging"
              {...register("packaging")}
              placeholder="e.g., Corrugated box, PP bags, vacuum pack"
              className={inputClasses}
            />
          </div>

          {/* Required Delivery Date */}
          <div>
            <label htmlFor="expectedDelivery" className={labelClasses}>
              Required Delivery Date
            </label>
            <input
              id="expectedDelivery"
              {...register("expectedDelivery")}
              placeholder="e.g., Next available sailing / Mid-Month"
              className={inputClasses}
            />
          </div>
        </div>
      </div>

      {/* Section 2: Contact Details */}
      <div className="mb-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-navy pb-3 border-b border-slate-100 mb-5">
          2. Buyer &amp; Company Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="fullName" className={labelClasses}>
              Your Name *
            </label>
            <input
              id="fullName"
              {...register("fullName")}
              placeholder="Full name"
              className={inputClasses}
            />
            {errors.fullName && <p className={errorClasses}>{errors.fullName.message}</p>}
          </div>

          <div>
            <label htmlFor="company" className={labelClasses}>
              Company Name *
            </label>
            <input
              id="company"
              {...register("company")}
              placeholder="Trading firm / import company"
              className={inputClasses}
            />
            {errors.company && <p className={errorClasses}>{errors.company.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Corporate Email *
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="procurement@company.com"
              className={inputClasses}
            />
            {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className={labelClasses}>
              WhatsApp / Phone Number
            </label>
            <input
              id="phone"
              {...register("phone")}
              placeholder="+971 ... / +91 ..."
              className={inputClasses}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="country" className={labelClasses}>
              Buyer Country *
            </label>
            <input
              id="country"
              {...register("country")}
              placeholder="United Arab Emirates, Saudi Arabia, Singapore, UK, etc."
              className={inputClasses}
            />
            {errors.country && <p className={errorClasses}>{errors.country.message}</p>}
          </div>
        </div>
      </div>

      {/* Section 3: Additional Notes & Message */}
      <div className="mb-8">
        <label htmlFor="message" className={labelClasses}>
          Message &amp; Quality Specifications
        </label>
        <textarea
          id="message"
          rows={3}
          {...register("message")}
          placeholder="Any specific caliber size, target CIF price, inspection agency requirements, or private label details..."
          className={`${inputClasses} resize-vertical`}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy text-white text-sm font-semibold rounded-[3px] hover:bg-navy-dark shadow-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Request Current Quote"}
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

export default function RequestQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-[clamp(40px,6vw,60px)] bg-off-white border-b border-light-gray">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-3">Commercial Quotation</SectionLabel>
            <h1 className="text-3xl md:text-5xl font-bold text-dark-text tracking-tight mb-4 max-w-3xl">
              Request a Current Quote
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-[620px] leading-relaxed">
              Share your product requirements and target destination. Our export desk coordinates
              verified sourcing, calibrated packaging, and transparent freight solutions from India.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Form Container */}
      <section className="py-[clamp(40px,6vw,80px)] bg-slate-50/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <Suspense
                fallback={
                  <div className="bg-white p-12 text-center text-slate-400 border border-slate-200">
                    Loading quote form...
                  </div>
                }
              >
                <QuoteForm />
              </Suspense>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
