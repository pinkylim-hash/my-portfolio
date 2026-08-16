import { notFound } from "next/navigation";
import { CapabilityDetailPage } from "@/components/CapabilityDetailPage";
import { getMarketingCapability } from "@/data/marketing-capabilities";

export default function ProductMarketingPage() {
  const capability = getMarketingCapability("product-marketing");

  if (!capability) notFound();

  return <CapabilityDetailPage capability={capability} />;
}
