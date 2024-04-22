# Music Relationships Viewer
### Front-end
- [Genius API documentation](https://docs.genius.com/#/getting-started-h1)
- [Axios documentation](https://axios-http.com/docs/intro)
- [React documentation](https://react.dev/)
- [React Router documentation](https://reactrouter.com/en/main)
### Back-end
- [Express documentation](https://expressjs.com/en/4x/api.html)
- [Sequelize documentation](https://sequelize.org/docs/v6/getting-started/)

```json
{
  meta: { status: 200 },
  response: {
    song: {
      annotation_count: 24,
      api_path: '/songs/233',
      apple_music_id: '1440841857',
      apple_music_player_url: 'https://genius.com/songs/233/apple_music_player',
      artist_names: '50 Cent',
      description: [Object],
      embed_content: "<div id='rg_embed_link_233' class='rg_embed_link' data-song-id='233'>Read <a href='https://genius.com/50-cent-in-da-club-lyrics'>“In da Club” by 50 Cent</a> on Genius</div> <script crossorigin src='//genius.com/songs/233/embed.js'></script>",
      featured_video: true,
      full_title: 'In da Club by 50 Cent',
      header_image_thumbnail_url: 'https://images.genius.com/23f1d2010b5a805a294541e187e95b07.300x300x1.jpg',
      header_image_url: 'https://images.genius.com/23f1d2010b5a805a294541e187e95b07.1000x1000x1.jpg',
      id: 233,
      language: 'en',
      lyrics_owner_id: 4,
      lyrics_placeholder_reason: null,
      lyrics_state: 'complete',
      path: '/50-cent-in-da-club-lyrics',
      pyongs_count: 201,
      recording_location: 'Encore Studios, Burbank, CA & Teamwork Studios, Long Island, NY',
      relationships_index_url: 'https://genius.com/50-cent-in-da-club-sample',
      release_date: '2003-01-07',
      release_date_for_display: 'January 7, 2003',
      release_date_with_abbreviated_month_for_display: 'Jan. 7, 2003',
      song_art_image_thumbnail_url: 'https://images.genius.com/3389143a3e12456fc07deb03fd3225a7.300x300x1.png',
      song_art_image_url: 'https://images.genius.com/3389143a3e12456fc07deb03fd3225a7.1000x1000x1.png',
      stats: [Object],
      title: 'In da Club',
      title_with_featured: 'In da Club',
      url: 'https://genius.com/50-cent-in-da-club-lyrics',
      current_user_metadata: [Object],
      album: [Object],
      custom_performances: [Array],
      description_annotation: [Object],
      featured_artists: [],
      lyrics_marked_complete_by: [Object],
      lyrics_marked_staff_approved_by: [Object],
      media: [Array],
      primary_artist: [Object],
      producer_artists: [Array],
      song_relationships: [Array],
      translation_songs: [Array],
      verified_annotations_by: [Array],
      verified_contributors: [Array],
      verified_lyrics_by: [],
      writer_artists: [Array]
    }
  }
}
{
  annotation_count: 24,
  api_path: '/songs/233',
  apple_music_id: '1440841857',
  apple_music_player_url: 'https://genius.com/songs/233/apple_music_player',
  artist_names: '50 Cent',
  description: { dom: { tag: 'root', children: [Array] } },
  embed_content: "<div id='rg_embed_link_233' class='rg_embed_link' data-song-id='233'>Read <a href='https://genius.com/50-cent-in-da-club-lyrics'>“In da Club” by 50 Cent</a> on Genius</div> <script crossorigin src='//genius.com/songs/233/embed.js'></script>",
  featured_video: true,
  full_title: 'In da Club by 50 Cent',
  header_image_thumbnail_url: 'https://images.genius.com/23f1d2010b5a805a294541e187e95b07.300x300x1.jpg',
  header_image_url: 'https://images.genius.com/23f1d2010b5a805a294541e187e95b07.1000x1000x1.jpg',
  id: 233,
  language: 'en',
  lyrics_owner_id: 4,
  lyrics_placeholder_reason: null,
  lyrics_state: 'complete',
  path: '/50-cent-in-da-club-lyrics',
  pyongs_count: 201,
  recording_location: 'Encore Studios, Burbank, CA & Teamwork Studios, Long Island, NY',
  relationships_index_url: 'https://genius.com/50-cent-in-da-club-sample',
  release_date: '2003-01-07',
  release_date_for_display: 'January 7, 2003',
  release_date_with_abbreviated_month_for_display: 'Jan. 7, 2003',
  song_art_image_thumbnail_url: 'https://images.genius.com/3389143a3e12456fc07deb03fd3225a7.300x300x1.png',
  song_art_image_url: 'https://images.genius.com/3389143a3e12456fc07deb03fd3225a7.1000x1000x1.png',
  stats: {
    accepted_annotations: 13,
    contributors: 251,
    iq_earners: 251,
    transcribers: 0,
    unreviewed_annotations: 9,
    verified_annotations: 1,
    concurrents: 3,
    hot: false,
    pageviews: 2411817
  },
  title: 'In da Club',
  title_with_featured: 'In da Club',
  url: 'https://genius.com/50-cent-in-da-club-lyrics',
  current_user_metadata: {
    permissions: [
      'see_pageviews',
      'view_apple_music_player',
      'view_recommendations',
      'view_relationships_page',
      'view_song_story_gallery'
    ],
    excluded_permissions: [
      'follow',
      'award_transcription_iq',
      'remove_transcription_iq',
      'pyong',
      'edit_lyrics',
      'view_annotation_engagement_data',
      'publish',
      'unpublish',
      'edit_spotify_details',
      'hide',
      'unhide',
      'toggle_featured_video',
      'add_pinned_annotation_to',
      'add_community_annotation_to',
      'destroy',
      'mark_as_not_spam',
      'edit_spotify_annotations_for',
      'verify_lyrics',
      'unverify_lyrics',
      'edit_anything',
      'edit_any_media',
      'edit',
      'rename',
      'edit_tags',
      'reindex',
      'view_lyrics_synchronization',
      'enable_media',
      'disable_media',
      'edit_lyrics_or_annotation_brackets',
      'see_editorial_indicators',
      'view_attribution_visualization',
      'edit_annotation_brackets',
      'preview_lyrics_for_export',
      'hide_apple_player',
      'unhide_apple_player',
      'trigger_apple_match',
      'mark_lyrics_evaluation_as_complete',
      'mark_lyrics_evaluation_as_staff_approved',
      'unmark_lyrics_evaluation_as_complete',
      'mark_lyrics_evaluation_as_un_staff_approved',
      'view_transcriber_media_player',
      'override_apple_match',
      'set_song_color_gradient',
      'mark_as_hot',
      'unmark_as_hot',
      'use_mark_complete_button',
      'edit_youtube_url',
      'edit_soundcloud_url',
      'edit_spotify_uuid',
      'edit_vevo_url',
      'create_comment',
      'moderate_annotations',
      'create_annotation',
      'see_short_id',
      'manage_chart_item',
      'create_tag',
      'propose_lyrics_edit',
      'view_lyrics_edit_proposals_on_song',
      'create_question',
      'answer_question_with_source',
      'create_additional_role',
      'add_qa',
      'pin_qa'
    ],
    interactions: { pyong: false, following: false },
    relationships: {},
    iq_by_action: {}
  },
  album: {
    api_path: '/albums/141',
    cover_art_url: 'https://images.genius.com/2f71a968b8b2b666a070c291edcf300e.1000x1000x1.png',
    full_title: 'Get Rich Or Die Tryin’ by 50 Cent',
    id: 141,
    name: 'Get Rich Or Die Tryin’',
    release_date_for_display: 'February 6, 2003',
    url: 'https://genius.com/albums/50-cent/Get-rich-or-die-tryin',
    artist: {
      api_path: '/artists/108',
      header_image_url: 'https://images.genius.com/27360d71a1b5342f0ff6b262f1b988cb.605x448x1.png',
      id: 108,
      image_url: 'https://images.genius.com/10f98dca7bcd1a31222e36374544cad5.1000x1000x1.png',
      is_meme_verified: false,
      is_verified: true,
      name: '50 Cent',
      url: 'https://genius.com/artists/50-cent',
      iq: 4025
    }
  },
  custom_performances: [
    { label: 'Phonographic Copyright ℗', artists: [Array] },
    { label: 'Copyright ©', artists: [Array] },
    { label: 'Label', artists: [Array] },
    { label: 'Distributor', artists: [Array] },
    { label: 'Performance Rights', artists: [Array] },
    { label: 'Publisher', artists: [Array] },
    { label: 'Assistant Recording Engineer', artists: [Array] },
    { label: 'Bass Guitar', artists: [Array] },
    { label: 'Co-Producer', artists: [Array] },
    { label: 'Guitar', artists: [Array] },
    { label: 'Keyboards', artists: [Array] },
    { label: 'Mixing Engineer', artists: [Array] },
    { label: 'Percussion', artists: [Array] },
    { label: 'Recording Engineer', artists: [Array] },
    { label: 'Studio Personnel', artists: [Array] },
    { label: 'Vocals', artists: [Array] },
    { label: 'Video Cinematography', artists: [Array] },
    { label: 'Video Commissioner', artists: [Array] },
    { label: 'Video Producer', artists: [Array] },
    { label: 'Video Director', artists: [Array] }
  ],
  description_annotation: {
    _type: 'referent',
    annotator_id: 4,
    annotator_login: 'murkle',
    api_path: '/referents/3489974',
    classification: 'accepted',
    fragment: 'In da Club',
    id: 3489974,
    is_description: true,
    path: '/3489974/50-cent-in-da-club/In-da-club',
    range: { content: 'In da Club' },
    song_id: 233,
    url: 'https://genius.com/3489974/50-cent-in-da-club/In-da-club',
    verified_annotator_ids: [],
    annotatable: {
      api_path: '/songs/233',
      client_timestamps: [Object],
      context: '50 Cent',
      id: 233,
      image_url: 'https://images.genius.com/3389143a3e12456fc07deb03fd3225a7.1000x1000x1.png',
      link_title: 'In da Club by 50 Cent',
      title: 'In da Club',
      type: 'Song',
      url: 'https://genius.com/50-cent-in-da-club-lyrics'
    },
    annotations: [ [Object] ]
  },
  featured_artists: [],
  lyrics_marked_complete_by: {
    api_path: '/users/2976672',
    avatar: {
      tiny: [Object],
      thumb: [Object],
      small: [Object],
      medium: [Object]
    },
    header_image_url: 'https://filepicker-images.genius.com/l1pegbzlvms',
    human_readable_role_for_display: 'Staff',
    id: 2976672,
    iq: 416746,
    login: 'Gary',
    name: 'Gary',
    role_for_display: 'staff',
    url: 'https://genius.com/Gary',
    current_user_metadata: {
      permissions: [],
      excluded_permissions: [Array],
      interactions: [Object]
    }
  },
  lyrics_marked_staff_approved_by: {
    api_path: '/users/2976672',
    avatar: {
      tiny: [Object],
      thumb: [Object],
      small: [Object],
      medium: [Object]
    },
    header_image_url: 'https://filepicker-images.genius.com/l1pegbzlvms',
    human_readable_role_for_display: 'Staff',
    id: 2976672,
    iq: 416746,
    login: 'Gary',
    name: 'Gary',
    role_for_display: 'staff',
    url: 'https://genius.com/Gary',
    current_user_metadata: {
      permissions: [],
      excluded_permissions: [Array],
      interactions: [Object]
    }
  },
  media: [
    {
      provider: 'youtube',
      start: 0,
      type: 'video',
      url: 'http://www.youtube.com/watch?v=5qm8PH4xAss'
    },
    {
      native_uri: 'spotify:track:4RY96Asd9IefaL3X4LOLZ8',
      provider: 'spotify',
      type: 'audio',
      url: 'https://open.spotify.com/track/4RY96Asd9IefaL3X4LOLZ8'
    },
    {
      attribution: '50_cent',
      provider: 'soundcloud',
      type: 'audio',
      url: 'https://soundcloud.com/50_cent/in-da-club'
    }
  ],
  primary_artist: {
    api_path: '/artists/108',
    header_image_url: 'https://images.genius.com/27360d71a1b5342f0ff6b262f1b988cb.605x448x1.png',
    id: 108,
    image_url: 'https://images.genius.com/10f98dca7bcd1a31222e36374544cad5.1000x1000x1.png',
    is_meme_verified: false,
    is_verified: true,
    name: '50 Cent',
    url: 'https://genius.com/artists/50-cent',
    iq: 4025
  },
  producer_artists: [
    {
      api_path: '/artists/123',
      header_image_url: 'https://images.genius.com/dcb87b5e938050ab66103a03b5bf4e1d.750x1000x1.jpg',
      id: 123,
      image_url: 'https://images.genius.com/925be9f44f4fd5dc5c5a30b4d4ce0f6e.749x749x1.jpg',
      is_meme_verified: false,
      is_verified: false,
      name: 'Dr. Dre',
      url: 'https://genius.com/artists/Dr-dre'
    },
    {
      api_path: '/artists/34793',
      header_image_url: 'https://images.genius.com/5acd35e572fddbdd85a558dfa894767e.299x299x1.jpg',
      id: 34793,
      image_url: 'https://images.genius.com/5acd35e572fddbdd85a558dfa894767e.299x299x1.jpg',
      is_meme_verified: false,
      is_verified: false,
      name: 'Mike Elizondo',
      url: 'https://genius.com/artists/Mike-elizondo'
    }
  ],
  song_relationships: [
    {
      relationship_type: 'samples',
      type: 'samples',
      url: null,
      songs: []
    },
    {
      relationship_type: 'sampled_in',
      type: 'sampled_in',
      url: 'https://genius.com/50-cent-in-da-club-sample/samples',
      songs: [Array]
    },
    {
      relationship_type: 'interpolates',
      type: 'interpolates',
      url: 'https://genius.com/50-cent-in-da-club-sample/interpolations',
      songs: [Array]
    },
    {
      relationship_type: 'interpolated_by',
      type: 'interpolated_by',
      url: 'https://genius.com/50-cent-in-da-club-sample/interpolations',
      songs: [Array]
    },
    {
      relationship_type: 'cover_of',
      type: 'cover_of',
      url: null,
      songs: []
    },
    {
      relationship_type: 'covered_by',
      type: 'covered_by',
      url: 'https://genius.com/50-cent-in-da-club-sample/covers',
      songs: [Array]
    },
    {
      relationship_type: 'remix_of',
      type: 'remix_of',
      url: 'https://genius.com/Rihanna-sex-with-me-sample/remixes',
      songs: []
    },
    {
      relationship_type: 'remixed_by',
      type: 'remixed_by',
      url: 'https://genius.com/50-cent-in-da-club-sample/remixes',
      songs: [Array]
    },
    {
      relationship_type: 'live_version_of',
      type: 'live_version_of',
      url: null,
      songs: []
    },
    {
      relationship_type: 'performed_live_as',
      type: 'performed_live_as',
      url: null,
      songs: [Array]
    },
    {
      relationship_type: 'translation_of',
      type: 'translation_of',
      url: null,
      songs: []
    },
    {
      relationship_type: 'translations',
      type: 'translations',
      url: 'https://genius.com/50-cent-in-da-club-sample/translations',
      songs: [Array]
    }
  ],
  translation_songs: [
    {
      api_path: '/songs/3639614',
      id: 3639614,
      language: 'tr',
      lyrics_state: 'complete',
      path: '/Genius-turkce-ceviri-50-cent-in-da-club-turkce-ceviri-lyrics',
      title: '50 Cent - In da Club (Türkçe Çeviri)',
      url: 'https://genius.com/Genius-turkce-ceviri-50-cent-in-da-club-turkce-ceviri-lyrics'
    },
    {
      api_path: '/songs/6039868',
      id: 6039868,
      language: 'pt',
      lyrics_state: 'complete',
      path: '/Genius-brasil-traducoes-50-cent-in-da-club-traducao-em-portugues-lyrics',
      title: '50 Cent - In da Club (Tradução em Português)',
      url: 'https://genius.com/Genius-brasil-traducoes-50-cent-in-da-club-traducao-em-portugues-lyrics'
    },
    {
      api_path: '/songs/7047587',
      id: 7047587,
      language: 'it',
      lyrics_state: 'incomplete',
      path: '/Genius-traduzioni-italiane-50-cent-in-da-club-traduzione-italiana-lyrics',
      title: '50 Cent - In da Club (Traduzione Italiana)',
      url: 'https://genius.com/Genius-traduzioni-italiane-50-cent-in-da-club-traduzione-italiana-lyrics'
    },
    {
      api_path: '/songs/103078',
      id: 103078,
      language: 'en',
      lyrics_state: 'complete',
      path: '/Genius-traductions-francaises-50-cent-in-da-club-traduction-francaise-lyrics',
      title: '50 Cent - In da Club (Traduction Française)',
      url: 'https://genius.com/Genius-traductions-francaises-50-cent-in-da-club-traduction-francaise-lyrics'
    },
    {
      api_path: '/songs/8612165',
      id: 8612165,
      language: 'es',
      lyrics_state: 'complete',
      path: '/Genius-traducciones-al-espanol-50-cent-in-da-club-traduccion-al-espanol-lyrics',
      title: '50 Cent - In da Club (Traducción al Español)',
      url: 'https://genius.com/Genius-traducciones-al-espanol-50-cent-in-da-club-traduccion-al-espanol-lyrics'
    },
    {
      api_path: '/songs/10019968',
      id: 10019968,
      language: 'de',
      lyrics_state: 'complete',
      path: '/Genius-deutsche-ubersetzungen-50-cent-in-da-club-deutsche-ubersetzung-lyrics',
      title: '50 Cent - In da Club (Deutsche Übersetzung)',
      url: 'https://genius.com/Genius-deutsche-ubersetzungen-50-cent-in-da-club-deutsche-ubersetzung-lyrics'
    }
  ],
  verified_annotations_by: [
    {
      api_path: '/users/1628085',
      avatar: [Object],
      header_image_url: 'https://images.genius.com/7879bf220b8614a7fe4617006f132a92.1000x391x1.png',
      human_readable_role_for_display: 'Verified Artist',
      id: 1628085,
      iq: 268673,
      login: 'eminem',
      name: 'Eminem',
      role_for_display: 'verified_artist',
      url: 'https://genius.com/eminem',
      current_user_metadata: [Object]
    }
  ],
  verified_contributors: [ { contributions: [Array], artist: [Object], user: [Object] } ],
  verified_lyrics_by: [],
  writer_artists: [
    {
      api_path: '/artists/108',
      header_image_url: 'https://images.genius.com/27360d71a1b5342f0ff6b262f1b988cb.605x448x1.png',
      id: 108,
      image_url: 'https://images.genius.com/10f98dca7bcd1a31222e36374544cad5.1000x1000x1.png',
      is_meme_verified: false,
      is_verified: true,
      name: '50 Cent',
      url: 'https://genius.com/artists/50-cent',
      iq: 4025
    },
    {
      api_path: '/artists/123',
      header_image_url: 'https://images.genius.com/dcb87b5e938050ab66103a03b5bf4e1d.750x1000x1.jpg',
      id: 123,
      image_url: 'https://images.genius.com/925be9f44f4fd5dc5c5a30b4d4ce0f6e.749x749x1.jpg',
      is_meme_verified: false,
      is_verified: false,
      name: 'Dr. Dre',
      url: 'https://genius.com/artists/Dr-dre'
    },
    {
      api_path: '/artists/34793',
      header_image_url: 'https://images.genius.com/5acd35e572fddbdd85a558dfa894767e.299x299x1.jpg',
      id: 34793,
      image_url: 'https://images.genius.com/5acd35e572fddbdd85a558dfa894767e.299x299x1.jpg',
      is_meme_verified: false,
      is_verified: false,
      name: 'Mike Elizondo',
      url: 'https://genius.com/artists/Mike-elizondo'
    }
  ]
}
```