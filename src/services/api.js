const API_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "GET",
      headers: { "Content-Type": "application-json" },
    });

    if (!response.ok) {
      throw new Error("Bağlantı sağlanamadı.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("hata oluştu", error);
  }
};
