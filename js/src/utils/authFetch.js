// src/utils/authFetch.js

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export const getAuthHeadersWithCSRF = async (
  method = "GET",
  contentType = true
) => {
  const credentials = btoa("caddok:");

  // 🔹 Step 1: Hit any internal GET to set CSRF cookie
  await fetch(
    "https://ktflceprd.kalyanicorp.com/internal/prod_cost",
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
      credentials: "include",
    }
  );

  const csrfToken = getCookie("CSRFToken");
  console.log("Fetched CSRF Token:", csrfToken);

  if (!csrfToken) {
    throw new Error("CSRF token not found");
  }

  const headers = {
    Authorization: `Basic ${credentials}`,
    "X-CSRF-Token": csrfToken,
  };

  if (contentType) {
    headers["Content-Type"] = "application/json";
  }

  return {
    headers,
    credentials: "include",
  };
};
