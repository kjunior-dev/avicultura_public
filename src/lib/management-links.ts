export function getManagementLinks() {

  const origin = process.env.MANAGEMENT_URL?.trim() || (process.env.NODE_ENV === "development" ? "" : "");

  if (!origin) throw new Error("Configure MANAGEMENT_URL com o endereço público de avicultura_management antes de publicar.");

  const management = new URL(origin);

  if (!["http:", "https:"].includes(management.protocol)) throw new Error("MANAGEMENT_URL deve usar HTTP ou HTTPS.");

  return {
    orderUrl: new URL("/cliente", management).href,
    adminUrl: new URL("/login", management).href,
  };
}
