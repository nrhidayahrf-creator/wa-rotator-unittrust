export default {
  async fetch(request) {
    const numbers = [
      "601133562682",
      "601137940029",
      "60186664621"
    ];

    const chosen = numbers[Math.floor(Math.random() * numbers.length)];

    return Response.redirect("https://wa.me/" + chosen, 302);
  }
};
