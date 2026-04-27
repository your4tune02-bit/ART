const curatedPhotoEntries = [
  {
    file: "IMG_3610.JPG",
    title: "Dáyat: A Visual Art Exhibit",
    chapter: "Gallery IV",
    topFeature: {
      rank: 1,
      lens: "Opening statement",
      teaser: "A curatorial statement glows behind blue water-light, setting the rhythm of the entire exhibit.",
      story:
        "Before the rattan waves and suspended fish, the wall speaks first. Dáyat — drawn from the vernacular of Pangasinan — names the coastal rhythms that the whole installation will embody. To read these words is to already begin the submersion."
    },
    highlightText:
      "The exhibit begins with language. Every work that follows is an answer to what these words have already promised.",
    description:
      "The curatorial statement for Dáyat appears not on a quiet gallery wall but inside the installation itself — caught in blue light, framed by kinetic shadow. Clyde Aedriel Rafael's 2026 installation draws from the vernacular language of Pangasinan to name the lived rhythms of coastal life, where sea, labor, and culture move as a single continuous current. To stand before this text is not to read about the exhibit. It is to enter it.",
    alt: "Curatorial statement for Dáyat, a 2026 visual art exhibit by Clyde Aedriel Rafael, displayed on a glowing blue panel."
  },
  {
    file: "IMG_3665.JPG",
    title: "The Natural History Wall",
    chapter: "Gallery III",
    topFeature: {
      rank: 2,
      lens: "Specimen and study",
      teaser: "A green wall dense with painted flora, fauna, and framed specimens turns observation into taxonomy.",
      story:
        "Each frame holds a different creature — fish, bird, spider, snake, beetle, plant. Arranged without strict symmetry, they form a collective portrait of the natural world as subject, specimen, and wonder. The fossil shell below anchors all of it in deep time."
    },
    highlightText:
      "The wall does not display nature so much as classify affection for it — each painting a careful act of noticing.",
    description:
      "This green gallery wall assembles natural history studies into a dense, salon-style arrangement. Paintings of local flora and fauna — bitter gourd, tamarind pods, a Philippine turtle dove, a sea bass, bamboo — sit beside carved bird sculptures and a massive clam fossil in acrylic display. The wall resists hierarchy: no single specimen dominates. Instead, the eye travels from frame to frame in the same restless, curious motion that field study demands.",
    alt: "A green museum wall covered in framed paintings of Philippine plants and animals, with fossil and carved bird sculptures on pedestals below."
  },
  {
    file: "IMG_3688.JPG",
    title: "The Bolinao Skull",
    chapter: "Gallery II",
    topFeature: {
      rank: 3,
      lens: "National treasure",
      teaser: "A skull recovered from a 14th-century burial site rests in glass, its gold-ornamented teeth still intact.",
      story:
        "Excavated in 1964 from Balingasay, Bolinao, Pangasinan, the skull carries Ming dynasty coins, oyster shells, and fish-scale gold ornaments on its teeth. In 2010, it was declared a National Cultural Treasure — a monument to the reach of pre-colonial trade and the intimacy of burial practice."
    },
    highlightText:
      "The ornamentation is not decoration. It is identity, preserved for six hundred years in the earth of Pangasinan.",
    description:
      "Among the most significant archaeological finds from Pangasinan, the Bolinao Skull was excavated from a 14th to 15th century burial site at Balingasay in the town of Bolinao. A National Museum team unearthed human remains whose graves were marked by oyster shells, Ming Dynasty wares, 11th century Chinese coins, beads, and metal accessories. The skull's fish-scale patterned gold ornaments on the anterior teeth represent a singular expression of pre-colonial Pangasinense identity. It was declared a National Cultural Treasure in 2010.",
    alt: "The Bolinao Skull displayed in a glass case beside an antique map panel on a terracotta-colored wall."
  },
  {
    file: "IMG_3716.JPG",
    title: "Figures of Faith and Resistance",
    chapter: "Gallery I",
    topFeature: {
      rank: 4,
      lens: "Historical archive",
      teaser: "Three photographs on a blue wall trace a lineage of spiritual leadership and collective memory in Pangasinan.",
      story:
        "Guardia de Honor de Maria, 1872. Juan Auyar and the Unión Espiritista Christiana de Filipinas, 1907. And beside them, the man known as the Pyramid of Asia — hands pressed together, eyes closed, a life of devotion rendered in color against a stage of light. The wall holds all three in the same calm register."
    },
    highlightText:
      "History here is not arranged chronologically. It is arranged by devotion — and the photographs understand that completely.",
    description:
      "This section of the exhibit gathers archival photographs that document the spiritual and cultural movements rooted in Pangasinan. The Guardia de Honor de Maria (1872) appears in military formation, their faith organized into discipline. Juan Auyar stands beside the founding of the Unión Espiritista Christiana de Filipinas (1907), a movement born from indigenous and colonial encounter. The third figure — the Pyramid of Asia — is shown in prayer, his posture alone carrying the weight of a public life given to belief.",
    alt: "Three large photographs mounted on a blue museum wall: a historical military group, a portrait of Juan Auyar, and a man in prayer labeled Pyramid of Asia."
  },
  {
    file: "IMG_3740.JPG",
    title: "Portraits of the Literary Pangasinan",
    chapter: "Gallery II",
    topFeature: {
      rank: 5,
      lens: "Commemorative hall",
      teaser: "Two portrait paintings hang above medals and manuscripts on a deep plum wall — a room built for legacy.",
      story:
        "The glass cases hold the physical residue of lives devoted to letters: a medallion on red velvet, stacked books with familiar names on their spines, a certificate, a scroll. Above them, two painted portraits in gold frames look outward with the quiet confidence of those who knew their work would outlast them."
    },
    highlightText:
      "A room arranged for legacy asks visitors to slow down. The display cases do not hurry, and neither should the eye.",
    description:
      "This commemorative gallery honors Pangasinense literary figures through formal painted portraiture and carefully arranged vitrine displays. The two men depicted — rendered in the warm, textured style of commemorative portraiture — are flanked by glass cases containing a gold medallion on red velvet, books bearing the name F. Sionil José, and institutional certificates. A bookshelf to the right holds titles including Gagamba and Sherds. The room's deep plum walls and spot-lit cases give it the quality of a private study preserved as public memory.",
    alt: "Two ornate portrait paintings on a dark plum wall, flanked by lit display cases containing medals, books, and manuscripts."
  },
  {
    file: "IMG_3779.JPG",
    title: "Into The Stone",
    chapter: "Gallery II",
    description:
      "Something shifts in Gallery II. The warmth of painted surfaces gives way to something older and less certain. The architecture no longer decorates — it insists. The figures who enter it are entering a different kind of attention.",
    alt: "Students posing inside a museum room designed like ancient ruins with tall columns."
  },
  {
    file: "IMG_3780.JPG",
    title: "The Gathering",
    chapter: "Gallery II",
    description:
      "What the ruins cannot hold, the people fill. Drawn closer together, as if the weight of the space required it, they form their own structure — temporary, warm, and unmistakably alive against the permanence around them.",
    alt: "Friends sitting and standing together in a themed museum ruins room."
  },
  {
    file: "IMG_3781.JPG",
    title: "Levity In The Ruin",
    chapter: "Gallery II",
    description:
      "The ruin asks for gravity. These figures offer something else entirely — ease, play, the quiet refusal to be solemn. That tension is what makes the image work. Not despite the backdrop, but in full conversation with it.",
    alt: "Friends making playful hand gestures in front of a ruins-style museum backdrop."
  },
  {
    file: "IMG_3782.JPG",
    title: "Motion Against Stone",
    chapter: "Gallery II",
    description:
      "The installation borrows the grammar of ruins — permanence, weight, historical silence — and this image tests it. The raised hands are not performing for a camera so much as for the space itself, asserting something vital against all that stone has been designed to outlast.",
    alt: "Group of students waving and smiling inside a museum exhibit with dramatic lighting."
  },
  {
    file: "IMG_3775.JPG",
    title: "Among The Framed",
    chapter: "Gallery III",
    description:
      "There is no clean boundary between viewer and exhibit here. The green wall, dense with framed studies, pulls everyone who stands before it into its own logic of arrangement. The people become another layer of the display, held by the same impulse that organized the works around them.",
    alt: "Friends posing in front of a green museum wall filled with framed drawings and paintings."
  },
  {
    file: "IMG_5964.JPG",
    title: "At Ease, Gallery III",
    chapter: "Gallery III",
    description:
      "Comfort is its own kind of statement. Where the first image tested how to stand inside an exhibit, this one has already forgotten to ask. The room is no longer a stage — it has become familiar.",
    alt: "Group of friends posing with peace signs in front of framed museum artworks."
  },
  {
    file: "IMG_5869.JPG",
    title: "Before The Light Changed",
    chapter: "Gallery I",
    description:
      "Gallery I asks nothing of the people inside it except to be present. The projected horizon holds no narrative, no drama — only the quality of light at a specific and unrepeatable moment. The figures are not looking at the sunset so much as resting inside what it does to the air.",
    alt: "Students standing in front of a projected sunset landscape inside the museum."
  },
  {
    file: "IMG_5892.JPG",
    title: "First Immersion",
    chapter: "Gallery IV",
    description:
      "The body's first response to total immersion is always a kind of recalibration. In Gallery IV, the room stops being a container and becomes a condition — one that changes how the figures inside it read themselves and each other.",
    alt: "Students observing a blue ocean-themed light installation with suspended fish art."
  },
  {
    file: "IMG_5902.JPG",
    title: "Held By The Blue",
    chapter: "Gallery IV",
    description:
      "The installation works by dissolving distinctions — between surface and air, between floor and ceiling, between person and place. What remains when those distinctions go is something closer to feeling than form. The figures seated here are not watching the work. They have been absorbed into it.",
    alt: "Friends sitting for a group photo in a deep blue immersive museum room."
  },
  {
    file: "IMG_5911.JPG",
    title: "Overhead, Suspended",
    chapter: "Gallery IV",
    description:
      "Look up, and the room proposes a different kind of depth. The suspended forms overhead do not float so much as preside — patient, deliberate, occupying the space above the human eye line as if they have always been there and always will be.",
    alt: "Wide view of a blue art installation with fish sculptures hanging from the ceiling."
  },
  {
    file: "IMG_5921.JPG",
    title: "Deeper In",
    chapter: "Gallery IV",
    description:
      "The further in you go, the less the room resembles a room. What the light outlines here is not architecture — it is threshold. The figures moving through it are not walking toward something so much as becoming part of how the space continues.",
    alt: "People walking through a blue neon-lit museum installation."
  },
  {
    file: "IMG_5922.JPG",
    title: "Dissolved In Light",
    chapter: "Gallery IV",
    description:
      "The installation's final argument is made through erasure. Faces, expressions, the particularity of each person — all of it surrendered to the glow. What the blue light keeps is presence without detail, which may be the most honest thing art can offer: the proof that someone stood here and was changed by it.",
    alt: "Silhouetted visitors inside a bright blue immersive art exhibit."
  },
  {
    file: "IMG_5923.JPG",
    title: "The Last Room",
    chapter: "Gallery IV",
    description:
      "Every exhibit has a moment where it stops asking to be understood and simply asks to be felt. This is that moment. The figures have grown quieter, the room has grown larger, and what remains between them is something the visit has been building toward all along.",
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
const topArtworkFiles = ["IMG_3610.JPG", "IMG_3665.JPG", "IMG_3688.JPG", "IMG_3716.JPG", "IMG_3740.JPG"];
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
    return "The Passage";
  }
  if (number <= 3701) {
    return "The Atrium";
  }
  return "The Wing";
}

function buildAdditionalDescription(chapter, sequence) {
  const templates = {
    "The Passage": [
      "The work here is about in-between states — the pause before the next room, the residue of what was just seen. Circulation becomes its own form of attention.",
      "Not every image is an arrival. Some are about the quality of moving through, the way a corridor changes a person before they know the next room has already begun.",
      "The museum does not end at its exhibits. These transitional spaces hold their own kind of meaning — unhurried, unremarked, and for that reason, honest.",
      "What a person notices when they are not looking for anything in particular is often the truest record of where they were."
    ],
    "The Atrium": [
      "Space itself is the argument here. The room does not support the work — it is the work, and everything inside it is answering that proposition.",
      "Scale changes what the body knows. In rooms this large, the human figure stops being the measure of things and becomes one element among many.",
      "The geometry of exhibition architecture is never neutral. Every angle, every surface carries a decision about what deserves attention and how.",
      "To stand in a space like this is to feel the building thinking. The proportions are not incidental — they are the first thing the exhibit asks you to feel."
    ],
    "The Wing": [
      "By this point in the visit, the distance between viewer and work has closed. These images carry the particular warmth of people who have stopped performing for a space and started belonging to it.",
      "Something loosens in the later rooms. The poses are less composed, the attention more diffuse — and in that looseness, the photographs become more true.",
      "The exhibit does not end cleanly. It lingers in the people moving through its final spaces, in the way they carry themselves after hours of looking.",
      "There is a quality of presence in these images that only arrives after sustained time with art — a kind of quiet that is not disengagement but its opposite."
    ]
  };

  const list = templates[chapter] || templates["The Passage"];
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
        <p class="scroll-copy">${photo.highlightText || photo.description}</p>
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
        <p class="scroll-copy">${feature.teaser || photo.highlightText || photo.description}</p>
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
      <p class="topwork-story scroll-copy">${feature.story || feature.teaser || photo.description}</p>
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
        <p class="scroll-copy">${photo.description}</p>
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
              <p class="scroll-copy">${photo.description}</p>
            </div>
          </article>
      `;
    })
    .join("");

  const chapterCounts = getChapterCounts(photoEntries);
  const chapterOrder = ["Gallery I", "Gallery II", "Gallery III", "Gallery IV", "The Passage", "The Atrium", "The Wing"];
  const chips = [
    { label: `All (${photoEntries.length})`, value: "all" },
    ...Object.entries(chapterCounts)
      .sort(([a], [b]) => {
        const ai = chapterOrder.indexOf(a);
        const bi = chapterOrder.indexOf(b);
        if (ai === -1 && bi === -1) return a.localeCompare(b);
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      })
      .map(([chapter, count]) => ({
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