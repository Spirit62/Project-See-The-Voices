const sessionData = {
  1: {
    date: 'January 2026',
    title: 'Baal Sewa Foundation / IC Matribhumi',
    lede: 'An early visit focused on meeting learners, building trust, and opening a shared visual language.',
    overview: 'A January visit to Baal Sewa Foundation at IC Matribhumi, with group learning, introductions, and practical signs.',
    reflection: 'We began by getting to know one another, then let the session grow through introductions, shared practice, and the first small signs of trust.',
    institution: 'Baal Sewa Foundation / IC Matribhumi',
    focus: 'First conversations',
    folder: '01-baal-sewa-matribhum',
    photos: 5,
    videos: 2,
    photoExtensions: ['jpg', 'jpg', 'jpg', 'jpg', 'jpg'],
    videoExtensions: ['mp4', 'mp4'],
  },
  2: {
    date: 'February 7, 2026',
    title: 'Leo Club at Clinton School',
    lede: 'A school visit shaped by shared attention, active participation, and plenty of hands in motion.',
    overview: 'Photographs from the February 7 Leo Club visit at Clinton School, where a classroom became a space for shared learning.',
    reflection: 'The classroom quickly became lively and collaborative. Learners asked questions, practiced together, and made space for one another as they went.',
    institution: 'Clinton School',
    focus: 'Leo Club visit',
    folder: '02-leo-clinton-school',
    photos: 5,
    videos: 2,
    photoExtensions: ['jpg', 'jpg', 'jpg', 'jpg', 'jpg'],
    videoExtensions: ['mp4', 'mp4'],
  },
  3: {
    date: 'June 6, 2026',
    title: 'Baal Sewa follow-up',
    lede: 'A return visit that carried the conversation forward through repetition, questions, and familiar faces.',
    overview: 'A June follow-up at Baal Sewa, continuing the work with familiar learners and a growing vocabulary of signs.',
    reflection: 'Coming back made the learning feel more familiar. We could pick up where we left off, revisit signs, and notice the confidence that had grown.',
    institution: 'Baal Sewa Foundation',
    focus: 'Continuing together',
    folder: '03-baal-sewa-follow-up',
    photos: 5,
    videos: 0,
    photoExtensions: ['png', 'png', 'png', 'png', 'png'],
  },
  4: {
    date: 'June 15, 2026',
    title: 'BMC College',
    lede: 'A college session about why sign language matters and how access begins with making room for participation.',
    overview: 'At BMC College, a large group gathered for a session on sign language, communication, and inclusion.',
    reflection: 'This conversation opened out across a larger room, bringing questions about communication and inclusion into focus for the whole group.',
    institution: 'BMC College',
    focus: 'Sign language awareness',
    folder: '04-bmc-college',
    photos: 5,
    videos: 2,
    photoExtensions: ['jpeg', 'jpeg', 'jpeg', 'jpeg', 'jpeg'],
    videoExtensions: ['mp4', 'mp4'],
  },
  5: {
    date: 'June 18, 2026',
    title: 'Malpi',
    lede: 'A lively classroom visit where learners practiced basic introductions and found confidence through repetition.',
    overview: 'The Malpi visit brought learners together for basic introductions, visual prompts, and hands-on practice.',
    reflection: 'At Malpi, simple introductions became a way into the session. Repeating them together helped the room settle into a relaxed, practical rhythm.',
    institution: 'Malpi',
    focus: 'Everyday introductions',
    folder: '05-malpi',
    photos: 5,
    videos: 2,
    photoExtensions: ['jpg', 'jpg', 'jpg', 'jpg', 'jpg'],
    videoExtensions: ['mov', 'mov'],
  },
  6: {
    date: 'June 26, 2026',
    title: 'BNKS 1',
    lede: 'A school-room session filled with questions, raised hands, and practical signs for everyday communication.',
    overview: 'At BNKS 1, learners practiced together in a bright, active classroom and made the lesson their own.',
    reflection: 'There were plenty of questions and raised hands at BNKS 1. The session stayed practical, with learners turning each new sign into something useful.',
    institution: 'BNKS 1',
    focus: 'Learning by doing',
    folder: '06-bnks-1',
    photos: 5,
    videos: 2,
    photoExtensions: ['png', 'png', 'png', 'png', 'png'],
    videoExtensions: ['mp4', 'mp4'],
  },
  7: {
    date: 'August 20, 2026',
    title: 'Trinity +2',
    lede: 'A large-group workshop that brought sign language, access, and curiosity into a shared auditorium.',
    overview: 'The Trinity +2 session gathered a wide audience for a practical introduction to sign language and access.',
    reflection: 'With so many people in the room, the session became a shared introduction to access: curious, energetic, and grounded in things everyone could try.',
    institution: 'Trinity +2',
    focus: 'Access in a larger room',
    folder: '07-trinity-plus-two',
    photos: 5,
    videos: 2,
    photoExtensions: ['jpg', 'jpg', 'jpg', 'jpg', 'jpg'],
    videoExtensions: ['mp4', 'mp4'],
  },
  8: {
    date: 'August 22, 2026',
    title: 'Self Help Nepal',
    lede: 'A community session grounded in participation, peer learning, and the small gestures that make a room welcoming.',
    overview: 'Self Help Nepal hosted a community-focused session with separate photo and video records from the day.',
    reflection: 'This gathering felt rooted in peer learning. People took part at their own pace, and the small gestures between them made the room feel welcoming.',
    institution: 'Self Help Nepal',
    focus: 'Community participation',
    folder: '08-self-help-nepal',
    photos: 3,
    videos: 2,
    photoExtensions: ['jpg', 'jpg', 'jpg'],
    videoExtensions: ['mp4', 'mp4'],
  },
  9: {
    date: '2026 archive',
    title: 'Across the visits',
    lede: 'A small visual index of the year so far: classrooms, presentations, questions, and people learning together.',
    overview: 'A recap drawn from the 2026 archive, connecting the places and people who have shaped the project so far.',
    reflection: 'Seen together, these visits tell a larger story: different rooms, different groups, and the steady work of making communication more accessible.',
    institution: 'See The Voices Nepal',
    focus: 'The growing archive',
    folder: '09-archive-recap',
    photos: 4,
    videos: 0,
    photoExtensions: ['jpg', 'jpg', 'jpeg', 'jpg'],
  },
};

function mediaPath(session, kind, index) {
  const actualExtension = kind === 'photo' ? session.photoExtensions[index] : session.videoExtensions[index];
  return `../images/sessions/${session.folder}/${session.folder}-${kind}-${String(index + 1).padStart(2, '0')}.${actualExtension}`;
}

function appendMedia(container, session, kind, index, label) {
  const item = document.createElement('figure');
  item.className = 'session-gallery-item';
  if (kind === 'photo') {
    const image = document.createElement('img');
    image.src = mediaPath(session, kind, index);
    image.alt = `${session.title}: ${label} ${index + 1}`;
    item.append(image);
  } else {
    const video = document.createElement('video');
    video.controls = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', `${session.title}: video ${index + 1}`);
    const source = document.createElement('source');
    source.src = mediaPath(session, kind, index);
    source.type = mediaPath(session, kind, index).endsWith('.mov') ? 'video/quicktime' : 'video/mp4';
    video.append(source);
    item.append(video);
  }
  container.append(item);
}

function renderDetailPage(session, sessionNumber) {
  const main = document.querySelector('.session-detail');
  if (!main) return;
  const header = main.querySelector('.session-detail-header');
  const figure = main.querySelector('.session-detail-image');
  const copy = main.querySelector('.session-detail-copy');
  const kicker = main.querySelector('.session-detail-kicker');
  const title = main.querySelector('h1');
  const lede = main.querySelector('.session-detail-lede');
  const paragraphs = main.querySelectorAll('.session-detail-copy p');
  const facts = main.querySelectorAll('.session-detail-fact strong');
  document.title = `Session ${String(sessionNumber).padStart(2, '0')} - ${session.title} - See The Voices Nepal`;
  kicker.textContent = `Session ${String(sessionNumber).padStart(2, '0')} / ${session.date}`;
  title.textContent = session.title;
  lede.textContent = session.lede;
  paragraphs[0].textContent = session.overview;
  paragraphs[1].textContent = session.reflection;
  facts[0].textContent = session.institution;
  facts[1].textContent = session.focus;
  figure.classList.remove('session-media-pending');
  figure.innerHTML = '';
  appendMedia(figure, session, 'photo', 0, 'lead photograph');
  const gallery = document.createElement('section');
  gallery.className = 'session-gallery';
  gallery.setAttribute('aria-label', `${session.title} media gallery`);
  const heading = document.createElement('h2');
  heading.textContent = 'From the day';
  gallery.append(heading);
  const grid = document.createElement('div');
  grid.className = 'session-gallery-grid';
  for (let index = 1; index < session.photos; index += 1) appendMedia(grid, session, 'photo', index, 'photograph');
  for (let index = 0; index < session.videos; index += 1) appendMedia(grid, session, 'video', index, 'video');
  gallery.append(grid);
  header.after(gallery);
}

function renderSessionCards() {
  document.querySelectorAll('.session-card[data-session]').forEach((card) => {
    const session = sessionData[card.dataset.session];
    if (!session) return;
    card.querySelector('.session-type').textContent = session.date;
    card.querySelector('h3').textContent = session.title;
    card.querySelector(':scope > p:not(.session-type)').textContent = session.overview;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('.session-detail[data-session]');
  if (main) renderDetailPage(sessionData[main.dataset.session], Number(main.dataset.session));
  renderSessionCards();
});