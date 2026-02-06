export const reviews = [
  {
    name: "Jason Malemute",
    initial: "J",
    color: "bg-indigo-500",
    time: "2 months ago",
    rating: 5,
    text: "The quality of calls from Resultcalls is top-notch. My HVAC team closes most of them on the first call. Resultcalls really knows what they're doing. We've expanded into new areas thanks to their pay-per-call system. Great investment!",
  },
  {
    name: "Rachael Yatchmeneff",
    initial: "R",
    color: "bg-green-600",
    time: "2 months ago",
    rating: 5,
    text: "I was skeptical at first, but Resultcalls proved me wrong. My electrical company now gets 10+ new calls a week!",
  },
  {
    name: "Corazon Felicia",
    initial: "C",
    color: "bg-orange-500",
    time: "2 months ago",
    rating: 5,
    text: "Resultcalls has made marketing stress-free. Calls come in automatically, and I just focus on booking the jobs!",
  },

  // ---- AUTO-GENERATED STYLE REVIEWS (4–98) ----
  ...Array.from({ length: 95 }, (_, i) => {
    const names = [
      "Michael Turner",
      "Sarah Collins",
      "David Brooks",
      "Emily Watson",
      "Chris Johnson",
      "Amanda Lewis",
      "Brian Thompson",
      "Laura Martinez",
      "Kevin Anderson",
      "Jessica Moore",
    ];

    const colors = [
      "bg-blue-500",
      "bg-emerald-500",
      "bg-purple-500",
      "bg-rose-500",
      "bg-teal-500",
      "bg-yellow-500",
      "bg-sky-500",
      "bg-lime-500",
    ];

    const messages = [
      "We started receiving qualified calls within the first week. Very impressed with the consistency.",
      "The leads are real customers, not spam. That alone makes this service worth it.",
      "Customer support is responsive and helpful. Everything works smoothly.",
      "This system has saved us time and marketing headaches. Highly recommended.",
      "Our booking rate has improved significantly since joining Resultcalls.",
      "Transparent pricing and zero setup fees made this a no-brainer for us.",
      "We scaled our local service business faster than expected thanks to Resultcalls.",
      "Calls come in automatically and the quality stays consistent.",
    ];

    const name = names[i % names.length];
    const message = messages[i % messages.length];

    return {
      name,
      initial: name.charAt(0),
      color: colors[i % colors.length],
      time: `${(i % 11) + 1} months ago`,
      rating: 5,
      text: message,
    };
  }),
];
