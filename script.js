const curatedPhotoEntries = [
  {
    file: "IMG_3775.JPG",
    title: "Green Wall Opening",
    chapter: "Green Wall Gallery",
    topFeature: {
      rank: 1,
      lens: "Opening room",
      teaser: "A wall of painted leaves and small creatures gathers the group into its pattern.",
      story:
        "Under the green wall, the framed birds and flowers seem to lean closer. The room feels less like a backdrop and more like a garden teaching everyone how to stand still together."
    },
    highlightText:
      "Subject: a group portrait before a salon wall of studies. Context: the framed works and green wall establish the exhibit's opening focus on observation and display.",
    description:
      "Subject: a group portrait before a salon wall of botanical and figurative studies. Content: the clustered frames turn the visitors into part of the display itself. Context: the green gallery wall establishes the exhibit's opening focus on observation, arrangement, and museum presentation.",
    alt: "Friends posing in front of a green museum wall filled with framed drawings and paintings."
  },
  {
    file: "IMG_5964.JPG",
    title: "Gesture Study At The Wall",
    chapter: "Green Wall Gallery",
    description:
      "The same gallery wall returns with lighter gestures and a looser pose, shifting the image from formal portrait to something more playful and candid.",
    alt: "Group of friends posing with peace signs in front of framed museum artworks."
  },
  {
    file: "IMG_3779.JPG",
    title: "Entrance To The Ruins Set",
    chapter: "Ruins Set",
    description:
      "Columns, stone textures, and a darker interior turn this group frame into the first full transition away from the bright gallery wall.",
    alt: "Students posing inside a museum room designed like ancient ruins with tall columns."
  },
  {
    file: "IMG_3780.JPG",
    title: "Closer Arrangement In Stone",
    chapter: "Ruins Set",
    description:
      "A tighter grouping within the same ruin-like set, where the architecture recedes slightly and the circle of figures carries more of the image.",
    alt: "Friends sitting and standing together in a themed museum ruins room."
  },
  {
    file: "IMG_3781.JPG",
    title: "Hand Signs In The Ruins",
    chapter: "Ruins Set",
    description:
      "Small hand gestures and relaxed posture soften the dramatic backdrop, giving the scene a more informal rhythm.",
    alt: "Friends making playful hand gestures in front of a ruins-style museum backdrop."
  },
  {
    file: "IMG_3782.JPG",
    title: "Waving Figure Study",
    chapter: "Ruins Set",
    topFeature: {
      rank: 2,
      lens: "Stone chamber",
      teaser: "In the darker room, raised hands break the stillness before the columns can keep it.",
      story:
        "The ruin set pretends to belong to another century, but the laughter gives it away. What should have been solemn stone becomes a stage for movement, greeting, and noise."
    },
    highlightText:
      "Subject: raised hands and grouped figures in a ruin-inspired room. Context: the scene uses architectural drama to turn the pose into performance.",
    description:
      "Subject: grouped figures with raised hands inside a ruin-inspired room. Content: the gesture brings energy and informality into a setting shaped by stone textures and shadow. Context: the installation borrows from historical architecture, so the room itself functions as part of the artwork.",
    alt: "Group of students waving and smiling inside a museum exhibit with dramatic lighting."
  },
  {
    file: "IMG_5869.JPG",
    title: "Sunset Projection Portrait",
    chapter: "Sunset Room",
    topFeature: {
      rank: 3,
      lens: "Quiet horizon",
      teaser: "A soft horizon settles behind the figures and slows the whole exhibit into evening.",
      story:
        "Here the room exhales. Gold and pale rose spread across the wall, and the group stands as if the light has asked for a gentler voice before the blue rooms begin."
    },
    highlightText:
      "Subject: standing figures before a projected horizon. Context: the work shifts the exhibit from historical staging toward atmospheric light.",
    description:
      "Subject: standing figures against a projected horizon. Content: the softened gradient light slows the pace of the exhibit and introduces a quieter emotional register. Context: this room serves as a transition between the heavier built interiors and the later immersive installation spaces.",
    alt: "Students standing in front of a projected sunset landscape inside the museum."
  },
  {
    file: "IMG_5892.JPG",
    title: "First View Of The Blue Room",
    chapter: "Blue Ocean Installation",
    description:
      "The group enters an installation filled with blue illumination and suspended forms, with the room itself taking equal weight beside the figures.",
    alt: "Students observing a blue ocean-themed light installation with suspended fish art."
  },
  {
    file: "IMG_5902.JPG",
    title: "Seated Portrait In Blue Light",
    chapter: "Blue Ocean Installation",
    topFeature: {
      rank: 4,
      lens: "Immersive blue",
      teaser: "Fish hang overhead while the floor, the wall, and the seated bodies dissolve into one color.",
      story:
        "Blue takes over everything at once. The fish above float like quiet thoughts, and the people below seem to rest inside the same tide that carries the room."
    },
    highlightText:
      "Subject: a seated group beneath hanging fish forms. Context: blue light merges floor, wall, and figure into a single immersive field.",
    description:
      "Subject: a seated group portrait beneath suspended fish forms. Content: the figures are held inside a field of deep blue light that compresses wall, floor, and body into one atmosphere. Context: the installation reflects contemporary exhibit design, where immersion and environment become the primary visual language.",
    alt: "Friends sitting for a group photo in a deep blue immersive museum room."
  },
  {
    file: "IMG_5911.JPG",
    title: "Ceiling Study With Suspended Forms",
    chapter: "Blue Ocean Installation",
    description:
      "A wider view that gives more space to the floating forms overhead, emphasizing the installation as an environment rather than a backdrop.",
    alt: "Wide view of a blue art installation with fish sculptures hanging from the ceiling."
  },
  {
    file: "IMG_5921.JPG",
    title: "Passage Through Electric Blue",
    chapter: "Blue Ocean Installation",
    description:
      "Figures move farther into the installation while cool lines of light describe the edge of the room around them.",
    alt: "People walking through a blue neon-lit museum installation."
  },
  {
    file: "IMG_5922.JPG",
    title: "Silhouettes Against The Installation",
    chapter: "Blue Ocean Installation",
    topFeature: {
      rank: 5,
      lens: "Silhouette ending",
      teaser: "Faces fade, outlines remain, and the room becomes the last voice in the sequence.",
      story:
        "By the final blue chamber, identity thins into shadow. Only the edges keep shining, as if the installation wants to be remembered not for details, but for the feeling of standing inside it."
    },
    highlightText:
      "Subject: silhouetted figures in a luminous blue room. Context: the installation shifts attention from individual pose to scale, light, and immersion.",
    description:
      "Subject: silhouetted figures inside a luminous blue installation. Content: the loss of detail in the bodies redirects attention toward scale, glow, and spatial atmosphere. Context: this work demonstrates how immersive environments can carry meaning through light and mood rather than through a single object alone.",
    alt: "Silhouetted visitors inside a bright blue immersive art exhibit."
  },
  {
    file: "IMG_5923.JPG",
    title: "Blue Room Closing Frame",
    chapter: "Blue Ocean Installation",
    description:
      "A quieter closing view where the figures pause and the hanging forms, glow, and negative space begin to dominate the frame.",
    alt: "Visitors standing in a glowing blue room with hanging sea-inspired art pieces."
  }
];

document.body.classList.add("js-enhanced");

const additionalMuseumNumbers = [
  3562, 3564, 3565, 3566, 3570, 3574, 3575, 3580, 3581, 3583, 3595, 3597, 3598, 3600, 3601, 3609, 3610, 3623, 3661, 3662,
  3665, 3670, 3671, 3672, 3673, 3674, 3677, 3678, 3679, 3680, 3682, 3683, 3685, 3688, 3689, 3690, 3691, 3693, 3697, 3698,
  3700, 3701, 3703, 3704, 3705, 3707, 3709, 3710, 3711, 3712, 3714, 3716, 3718, 3720, 3721, 3723, 3725, 3726, 3728, 3729,
  3730, 3731, 3733, 3735, 3738, 3739, 3740, 3741, 3746
];

const duplicateFiles = new Set(["IMG_5964.JPG", "IMG_3780.JPG", "IMG_3697.JPG", "IMG_3701.JPG", "IMG_3728.JPG"]);
const topArtworkFiles = ["IMG_3775.JPG", "IMG_3782.JPG", "IMG_5869.JPG", "IMG_5902.JPG", "IMG_5922.JPG"];
const artMoodPhrases = [
  "Soft light and layered texture let each room read like its own small installation.",
  "Across the sequence, painted walls and staged interiors keep shifting the emotional temperature of the work.",
  "The strongest frames hold a balance between portraiture and the architecture around it.",
  "Color does most of the storytelling here: green, stone, gold, and finally electric blue."
];

let activeGalleryFilter = "all";
let revealObserver = null;

function chapterFromNumber(number) {
  if (number <= 3623) {
    return "Museum Walkthrough";
  }
  if (number <= 3701) {
    return "Exhibit Spaces";
  }
  return "Art And Bonding Moments";
}

function buildAdditionalDescription(chapter, sequence) {
  const templates = {
    "Museum Walkthrough": [
      "A quieter passage image focused on wall details, pacing, and the movement between one room and the next.",
      "This frame reads like a transition study, holding onto observation more than pose.",
      "An in-between museum view where the setting stays just as important as the people moving through it.",
      "A documentary-style image built around atmosphere, circulation, and small visual details."
    ],
    "Exhibit Spaces": [
      "A spatial study centered on the geometry, surface, and scale of the installation.",
      "This frame leans into perspective and texture, letting the room carry the composition.",
      "An architectural view where layout and depth become the main visual event.",
      "A wider exhibit image that gives more weight to atmosphere, structure, and spatial rhythm."
    ],
    "Art And Bonding Moments": [
      "A later room portrait where the figures sit more naturally inside the artwork around them.",
      "This image balances pose and atmosphere, keeping attention on both expression and setting.",
      "A closing-stage frame where the social energy is softened by the mood of the room.",
      "A later gallery image shaped by gesture, placement, and the visual texture of the installation."
    ]
  };

  const list = templates[chapter] || templates["Museum Walkthrough"];
  return list[(sequence - 1) % list.length];
}

function imagePath(fileName) {
  return `assets/images/${fileName}`;
}

function toSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function shuffleArray(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
  }
}

const chapterSequenceCounter = {};
const additionalMuseumEntries = additionalMuseumNumbers.map((number) => {
  const chapter = chapterFromNumber(number);
  chapterSequenceCounter[chapter] = (chapterSequenceCounter[chapter] || 0) + 1;
  const sequence = chapterSequenceCounter[chapter];

  return {
    file: `IMG_${number}.JPG`,
    title: `${chapter} Study ${String(sequence).padStart(2, "0")}`,
    chapter,
    description: buildAdditionalDescription(chapter, sequence),
    alt: `${chapter} artwork photo ${number} from the museum trip.`
  };
});

const rawPhotoEntries = [...curatedPhotoEntries, ...additionalMuseumEntries];
const seenFiles = new Set();
const photoEntries = rawPhotoEntries.filter((photo) => {
  if (duplicateFiles.has(photo.file) || seenFiles.has(photo.file)) {
    return false;
  }
  seenFiles.add(photo.file);
  return true;
});

function getChapterCounts(entries) {
  return entries.reduce((accumulator, photo) => {
    accumulator[photo.chapter] = (accumulator[photo.chapter] || 0) + 1;
    return accumulator;
  }, {});
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getVisibleGalleryCount(selectedFilter) {
  if (selectedFilter === "all") {
    return photoEntries.length;
  }

  return photoEntries.filter((photo) => toSlug(photo.chapter) === selectedFilter).length;
}

function updateGalleryCount(selectedFilter) {
  const count = getVisibleGalleryCount(selectedFilter);
  document.querySelectorAll("[data-gallery-count]").forEach((element) => {
    element.textContent = String(count);
  });
}

function updateMoodText() {
  const element = document.querySelector("[data-art-mood]");
  if (!element) {
    return;
  }

  element.textContent = getRandomItem(artMoodPhrases);
}

function buildHighlightMarkup(photo, index, badge) {
  return `
    <article
      class="highlight-card reveal"
      style="--delay: ${index * 70}ms"
      data-lightbox-image="${imagePath(photo.file)}"
      data-lightbox-alt="${photo.alt}"
      data-lightbox-title="${photo.title}"
      data-lightbox-chapter="${photo.chapter}"
      data-lightbox-description="${photo.description}"
    >
      <img src="${imagePath(photo.file)}" alt="${photo.alt}" loading="lazy" data-artwork="true">
      <div class="highlight-copy">
        <p class="highlight-badge">${badge}</p>
        <h3>${photo.title}</h3>
        <p class="highlight-chapter">${photo.chapter}</p>
        <p>${photo.highlightText || photo.description}</p>
      </div>
    </article>
  `;
}

function buildTopArtworkMarkup(photo, index) {
  const feature = photo.topFeature || {};
  return `
    <article
      class="highlight-card topwork-card reveal"
      style="--delay: ${index * 70}ms"
      data-topwork-select="${photo.file}"
      data-lightbox-image="${imagePath(photo.file)}"
      data-lightbox-alt="${photo.alt}"
      data-lightbox-title="${photo.title}"
      data-lightbox-chapter="${photo.chapter}"
      data-lightbox-description="${photo.description}"
    >
      <div class="topwork-rank">0${feature.rank || index + 1}</div>
      <img src="${imagePath(photo.file)}" alt="${photo.alt}" loading="lazy" data-artwork="true">
      <div class="highlight-copy">
        <div class="topwork-head">
          <p class="highlight-badge">Top 5</p>
          <p class="topwork-lens">${feature.lens || "Curatorial focus"}</p>
        </div>
        <h3>${photo.title}</h3>
        <p class="highlight-chapter">${photo.chapter}</p>
        <p>${feature.teaser || photo.highlightText || photo.description}</p>
      </div>
    </article>
  `;
}

function renderHomeHighlights() {
  const container = document.querySelector("[data-home-highlights]");
  const panel = document.querySelector("[data-topwork-panel]");
  if (!container) {
    return;
  }

  const items = topArtworkFiles
    .map((file) => photoEntries.find((photo) => photo.file === file))
    .filter(Boolean);

  container.innerHTML = items.map((photo, index) => buildTopArtworkMarkup(photo, index)).join("");
  if (panel) {
    renderTopArtworkPanel(items[0]);
  }
  observeNewRevealElements(container);
  wireImageFallbacks(container);

  container.querySelectorAll("[data-topwork-select]").forEach((card) => {
    const updatePanel = () => {
      const photo = items.find((item) => item.file === card.dataset.topworkSelect);
      if (photo) {
        renderTopArtworkPanel(photo);
      }
    };

    card.addEventListener("mouseenter", updatePanel);
    card.addEventListener("focusin", updatePanel);
  });
}

function renderTopArtworks() {
  const container = document.querySelector("[data-top-artworks]");
  const panel = document.querySelector("[data-topwork-panel]");
  if (!container) {
    return;
  }

  const items = topArtworkFiles
    .map((file) => photoEntries.find((photo) => photo.file === file))
    .filter(Boolean);

  container.innerHTML = items.map((photo, index) => buildTopArtworkMarkup(photo, index)).join("");
  if (panel) {
    renderTopArtworkPanel(items[0]);
  }
  observeNewRevealElements(container);
  wireImageFallbacks(container);

  container.querySelectorAll("[data-topwork-select]").forEach((card) => {
    const updatePanel = () => {
      const photo = items.find((item) => item.file === card.dataset.topworkSelect);
      if (photo) {
        renderTopArtworkPanel(photo);
      }
    };

    card.addEventListener("mouseenter", updatePanel);
    card.addEventListener("focusin", updatePanel);
  });
}

function renderTopArtworkPanel(photo) {
  const panel = document.querySelector("[data-topwork-panel]");
  if (!panel || !photo) {
    return;
  }

  const feature = photo.topFeature || {};
  panel.innerHTML = `
    <div class="topwork-panel-copy">
      <p class="eyebrow">Story fragment</p>
      <h3>${photo.title}</h3>
      <p class="topwork-panel-meta">Rank 0${feature.rank || 1} | ${feature.lens || photo.chapter}</p>
      <p class="topwork-story">${feature.story || feature.teaser || photo.description}</p>
    </div>
    <figure class="topwork-panel-media">
      <img src="${imagePath(photo.file)}" alt="${photo.alt}" loading="lazy" data-artwork="true">
    </figure>
  `;

  wireImageFallbacks(panel);
}

function renderGallerySpotlight() {
  const container = document.querySelector("[data-spotlight]");
  if (!container) {
    return;
  }

  const photo = getRandomItem(photoEntries);
  if (!photo) {
    container.innerHTML = '<div class="spotlight-empty">No spotlight image available.</div>';
    return;
  }

  container.innerHTML = `
    <article
      class="spotlight-card reveal"
      data-lightbox-image="${imagePath(photo.file)}"
      data-lightbox-alt="${photo.alt}"
      data-lightbox-title="${photo.title}"
      data-lightbox-chapter="${photo.chapter}"
      data-lightbox-description="${photo.description}"
    >
      <div class="spotlight-media">
        <img src="${imagePath(photo.file)}" alt="${photo.alt}" loading="lazy" data-artwork="true">
      </div>
      <div class="spotlight-copy">
        <p class="eyebrow">Wall spotlight</p>
        <h3>${photo.title}</h3>
        <p class="spotlight-chapter">${photo.chapter}</p>
        <p>${photo.description}</p>
      </div>
    </article>
  `;

  observeNewRevealElements(container);
  wireImageFallbacks(container);
}

function setGalleryFilter(selectedFilter) {
  const cards = document.querySelectorAll("#photo-grid .photo-card");
  cards.forEach((card) => {
    const shouldShow = selectedFilter === "all" || card.dataset.chapter === selectedFilter;
    card.classList.toggle("hidden", !shouldShow);
  });

  document.querySelectorAll("[data-filter-row] .filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === selectedFilter);
  });

  activeGalleryFilter = selectedFilter;
  updateGalleryCount(selectedFilter);
}

function renderGallery(selectedFilter = activeGalleryFilter) {
  const grid = document.getElementById("photo-grid");
  const filterRow = document.querySelector("[data-filter-row]");
  if (!grid || !filterRow) {
    return;
  }

  if (!photoEntries.length) {
    grid.innerHTML = '<div class="photo-empty">No photos are available at the moment.</div>';
    filterRow.innerHTML = "";
    updateGalleryCount("all");
    return;
  }

  grid.innerHTML = photoEntries
    .map((photo, index) => {
      const chapterSlug = toSlug(photo.chapter);
      return `
        <article
          class="photo-card reveal"
          data-chapter="${chapterSlug}"
          data-lightbox-image="${imagePath(photo.file)}"
          data-lightbox-alt="${photo.alt}"
          data-lightbox-title="${photo.title}"
          data-lightbox-chapter="${photo.chapter}"
          data-lightbox-description="${photo.description}"
          style="--delay: ${Math.min(index * 24, 320)}ms"
        >
          <img src="${imagePath(photo.file)}" alt="${photo.alt}" loading="lazy" data-artwork="true">
          <div class="photo-meta">
            <div class="photo-top">
              <h3>${photo.title}</h3>
              <span class="photo-tag">${photo.chapter}</span>
            </div>
            <p>${photo.description}</p>
          </div>
        </article>
      `;
    })
    .join("");

  const chapterCounts = getChapterCounts(photoEntries);
  const chips = [
    { label: `All (${photoEntries.length})`, value: "all" },
    ...Object.entries(chapterCounts).map(([chapter, count]) => ({
      label: `${chapter} (${count})`,
      value: toSlug(chapter)
    }))
  ];

  filterRow.innerHTML = chips
    .map(
      (chip) =>
        `<button type="button" class="filter-chip${chip.value === selectedFilter ? " active" : ""}" data-filter="${chip.value}">${chip.label}</button>`
    )
    .join("");

  filterRow.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      setGalleryFilter(chip.dataset.filter);
    });
  });

  setGalleryFilter(selectedFilter);
  observeNewRevealElements(grid);
  wireImageFallbacks(grid);
}

function shuffleGallery() {
  shuffleArray(photoEntries);
  renderGallery(activeGalleryFilter);
  renderGallerySpotlight();
}

function wireImageFallbacks(scope = document) {
  scope.querySelectorAll('img[data-artwork="true"]').forEach((img) => {
    if (img.dataset.fallbackBound === "true") {
      return;
    }

    img.dataset.fallbackBound = "true";
    img.addEventListener(
      "error",
      () => {
        img.style.display = "none";
        const meta = img.closest(".photo-card, .highlight-card, .spotlight-card")?.querySelector(".photo-meta, .highlight-copy, .spotlight-copy");
        if (meta && !meta.querySelector(".image-warning")) {
          const warning = document.createElement("p");
          warning.className = "image-warning";
          warning.textContent = "Image unavailable in this browser copy.";
          meta.appendChild(warning);
        }
      },
      { once: true }
    );
  });
}

function initGalleryActions() {
  const shuffleButton = document.getElementById("shuffle-gallery");
  if (shuffleButton) {
    shuffleButton.addEventListener("click", () => {
      shuffleButton.disabled = true;
      shuffleGallery();
      window.setTimeout(() => {
        shuffleButton.disabled = false;
      }, 350);
    });
  }

  const moodButton = document.getElementById("refresh-mood");
  if (moodButton) {
    moodButton.addEventListener("click", updateMoodText);
  }
}

function updateLiveStats() {
  const chapterTotal = Object.keys(getChapterCounts(photoEntries)).length;
  const totalPhotos = photoEntries.length;

  document.querySelectorAll("[data-total-photos]").forEach((element) => {
    element.textContent = String(totalPhotos);
  });

  document.querySelectorAll("[data-total-chapters]").forEach((element) => {
    element.textContent = String(chapterTotal);
  });

  updateGalleryCount(activeGalleryFilter);
}

function initMenu() {
  const button = document.querySelector("[data-menu-btn]");
  const nav = document.querySelector("[data-nav]");

  if (!button || !nav) {
    return;
  }

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      button.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    }
  });
}

function initLightbox() {
  const markup = `
    <div class="lightbox" data-lightbox hidden>
      <div class="lightbox-backdrop" data-lightbox-close></div>
      <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Artwork preview">
        <button class="lightbox-close" type="button" aria-label="Close preview" data-lightbox-close>&times;</button>
        <div class="lightbox-media">
          <img src="" alt="" data-lightbox-img>
        </div>
        <div class="lightbox-copy">
          <p class="eyebrow" data-lightbox-chapter></p>
          <h2 data-lightbox-title></h2>
          <p data-lightbox-description></p>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", markup);

  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImg = lightbox?.querySelector("[data-lightbox-img]");
  const lightboxTitle = lightbox?.querySelector("[data-lightbox-title]");
  const lightboxChapter = lightbox?.querySelector("[data-lightbox-chapter]");
  const lightboxDescription = lightbox?.querySelector("[data-lightbox-description]");

  if (!lightbox || !lightboxImg || !lightboxTitle || !lightboxChapter || !lightboxDescription) {
    return;
  }

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    lightboxImg.src = "";
    lightboxImg.alt = "";
  };

  const openLightbox = (card) => {
    lightboxImg.src = card.dataset.lightboxImage || "";
    lightboxImg.alt = card.dataset.lightboxAlt || "";
    lightboxTitle.textContent = card.dataset.lightboxTitle || "";
    lightboxChapter.textContent = card.dataset.lightboxChapter || "";
    lightboxDescription.textContent = card.dataset.lightboxDescription || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  };

  document.addEventListener("click", (event) => {
    const closeTrigger = event.target.closest("[data-lightbox-close]");
    if (closeTrigger) {
      closeLightbox();
      return;
    }

    const card = event.target.closest(".highlight-card, .photo-card, .spotlight-card");
    if (!card || !card.dataset.lightboxImage) {
      return;
    }

    openLightbox(card);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) {
    return;
  }

  const showAll = () => {
    elements.forEach((element) => element.classList.add("is-visible"));
  };

  if (!("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  elements.forEach((element) => revealObserver.observe(element));
  window.setTimeout(showAll, 1400);
}

function observeNewRevealElements(container) {
  const elements = container.querySelectorAll(".reveal");
  if (!elements.length) {
    return;
  }

  if (!revealObserver) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  elements.forEach((element) => revealObserver.observe(element));
}

function setYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = year;
  });
}

try {
  initReveal();
  renderHomeHighlights();
  renderTopArtworks();
  renderGallery();
  renderGallerySpotlight();
  updateMoodText();
  initGalleryActions();
  wireImageFallbacks();
  updateLiveStats();
  initMenu();
  initLightbox();
  setYear();
} catch (error) {
  console.error("Museum script initialization failed:", error);
}
