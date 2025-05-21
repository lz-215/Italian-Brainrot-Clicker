// 多语言翻译对象 - 包含所有支持的语言及其对应的文本翻译
const translations = {
    // 英文翻译
    en: {
        // 页头部分
        'popular-games': 'Popular Games',
        'more-games': 'More Games',
        'fullscreen': 'Fullscreen',
        
        // 游戏信息部分
        'game-features': 'Game Features',
        'how-to-play': 'How to Play',
        'what-players-love': 'What Players Love',
        'faq': 'Frequently Asked Questions',
        
        // 游戏特点部分
        'feature-1': 'Meme-inspired madness and wild AI creatures',
        'feature-2': 'Weather-changing visuals and evolving backgrounds',
        'feature-3': 'Insane 2x mode for instant new scenes',
        'feature-4': 'Simple, addictive one-button gameplay',
        'feature-5': 'Regular updates and new surprises',
        
        // 游戏操作指南部分
        'controls': 'Use your mouse to click and interact with the game.',
        
        // 玩家评论部分
        'review-1': 'This clicker is absolutely hilarious! Every click brings a new meme or wild surprise. I can\'t stop laughing and playing!',
        'review-2': 'The visuals and sound effects are pure chaos in the best way. It\'s the most addictive idle game I\'ve tried!',
        'review-3': 'I love how the game keeps evolving. There\'s always something new and unexpected with every session!',
        'review-4': 'Perfect for quick fun or long sessions. A must-play for anyone who loves memes and clicker games!',
        
        // 网站优势部分
        'why-1': 'This game delivers a nonstop stream of meme-fueled fun. Every click brings new surprises, making each session unpredictable and hilarious.',
        'why-2': 'Enjoy wild, AI-generated scenes and backgrounds that change as you play. The experience never looks the same twice!',
        'why-3': 'Simple to start, impossible to put down. Perfect for both quick breaks and long play sessions.',
        'why-4': 'Join a growing community of meme lovers. The game is updated regularly with new content and features to keep things fresh!',
        
        // 最新更新部分
        'update-1': 'New meme packs added! Now features even more hilarious content to unlock.',
        'update-2': 'Visual effects upgraded for extra chaos—expect wild backgrounds and unpredictable scenes!',
        'update-3': '2x Mode introduced: Double your brainrot and unlock new surprises faster than ever.',
        'update-4': 'Performance improvements for smoother clicking and instant feedback.',
        'update-5': 'Stay tuned for upcoming community events and exclusive limited-time memes!',
        
        // 常见问题解答部分
        'faq-1-q': 'Is this game free to play?',
        'faq-1-a': 'Yes, all games on our platform are completely free!',
        'faq-2-q': 'What are the system requirements?',
        'faq-2-a': 'The game runs smoothly on most modern browsers. We recommend using Chrome or Firefox for the best experience.',
        'faq-3-q': 'How do I save my progress?',
        'faq-3-a': 'Your progress is automatically saved when you\'re logged in. Make sure to create an account to keep track of your achievements.',
        
        // 页脚部分
        'copyright': '© 2024 Fish Frenzy. All rights reserved.',
        'contact-us': 'Contact Us'
    },
    // 中文翻译
    zh: {
        // 页头部分
        'popular-games': '热门游戏',
        'more-games': '更多游戏',
        'fullscreen': '全屏',
        
        // 游戏信息部分
        'game-features': '游戏特色',
        'how-to-play': '如何玩',
        'what-players-love': '玩家喜爱',
        'faq': '常见问题',
        
        // 游戏特点部分
        'feature-1': 'Meme-inspired madness and wild AI creatures',
        'feature-2': 'Weather-changing visuals and evolving backgrounds',
        'feature-3': 'Insane 2x mode for instant new scenes',
        'feature-4': 'Simple, addictive one-button gameplay',
        'feature-5': 'Regular updates and new surprises',
        
        // 游戏操作指南部分
        'controls': '使用鼠标左键、WASD或方向键进行移动。',
        
        // 玩家评论部分
        'review-1': '玩家喜欢Fish Frenzy的水下画面和流畅操作。游戏充满挑战和乐趣，是鱼类游戏爱好者的最爱。',
        'review-2': '这款游戏以独特的鱼类收集和丰富成就脱颖而出。Fish Frenzy社区友好，乐于冒险！',
        'review-3': '每次游玩都是新的水下冒险。丰富的功能和持续更新让我不断回归。',
        'review-4': 'Fish Frenzy是鱼类主题游戏的最佳选择，体验无与伦比！',
        
        // 网站优势部分
        'why-1': 'Fish Frenzy带来独一无二的水下冒险。你可以捕捉稀有鱼类，解锁成就，享受无尽乐趣。适合喜欢挑战的玩家。',
        'why-2': '每日奖励、特别活动和丰富鱼类收集让体验常新，吸引玩家反复游玩。',
        'why-3': '加入Fish Frenzy社区，与全球玩家互动。平台鼓励团队合作、经验分享和共同庆祝成就。',
        'why-4': 'Fish Frenzy经常更新新功能、新鱼类和新挑战，敬请关注最新动态！',
        
        // 最新更新部分
        'update-1': 'Fish Frenzy最新更新引入了稀有鱼类和精彩水下活动。',
        'update-2': '画面和操作进一步优化，体验更佳。',
        'update-3': '现已推出每日挑战和专属奖励。',
        'update-4': '定期更新带来新内容和新冒险。',
        'update-5': '加入社区，发现最新功能并分享你的建议！',
        
        // 常见问题解答部分
        'faq-1-q': '这个游戏是免费的吗？',
        'faq-1-a': '是的，我们平台上的所有游戏都是完全免费的！',
        'faq-2-q': '游戏对系统有要求吗？',
        'faq-2-a': '本游戏在大多数现代浏览器上都能流畅运行。推荐使用Chrome或Firefox获得最佳体验。',
        'faq-3-q': '如何保存我的进度？',
        'faq-3-a': '登录后进度会自动保存。建议注册账号以便记录成就。',
        
        // 页脚部分
        'copyright': '© 2024 Fish Frenzy. 保留所有权利。',
        'contact-us': '联系我们'
    },
    // 日文翻译
    ja: {
        // 页头部分
        'popular-games': '人気のゲーム',
        'more-games': 'その他のゲーム',
        'fullscreen': '全画面表示',
        
        // 游戏信息部分
        'game-features': 'ゲームの特徴',
        'how-to-play': '遊び方',
        'what-players-love': 'プレイヤーの声',
        'faq': 'よくある質問',
        
        // 游戏特点部分
        'feature-1': 'Meme-inspired madness and wild AI creatures',
        'feature-2': 'Weather-changing visuals and evolving backgrounds',
        'feature-3': 'Insane 2x mode for instant new scenes',
        'feature-4': 'Simple, addictive one-button gameplay',
        'feature-5': 'Regular updates and new surprises',
        
        // 游戏操作指南部分
        'controls': '左マウスボタン、WASDまたは矢印キーで移動します。',
        
        // 玩家评论部分
        'review-1': 'Fish Frenzyの美しい水中グラフィックと滑らかな操作性が大好きです。チャレンジと楽しさが満載で、魚ゲームファンに大人気です。',
        'review-2': 'このゲームはユニークな魚のコレクションと達成感で際立っています。Fish Frenzyコミュニティはフレンドリーで冒険好き！',
        'review-3': '毎回が新しい水中アドベンチャー。機能が豊富でアップデートも多く、何度も遊びたくなります。',
        'review-4': 'Fish Frenzyは魚テーマのゲームで最高の選択です。体験は本当に他にありません！',
        
        // 网站优势部分
        'why-1': 'Fish Frenzyは唯一無二の水中アドベンチャーを提供します。レアな魚を捕まえ、実績を解除し、無限の楽しみを味わえます。挑戦好きなプレイヤーに最適です。',
        'why-2': '毎日の報酬や特別イベント、多彩な魚のコレクションで常に新鮮な体験が楽しめます。',
        'why-3': 'Fish Frenzyコミュニティに参加して世界中のプレイヤーと交流しましょう。チームワークや情報共有、実績の祝福を推奨しています。',
        'why-4': 'Fish Frenzyは新機能や新しい魚、チャレンジを頻繁に追加しています。最新情報をお見逃しなく！',
        
        // 最新更新部分
        'update-1': 'Fish Frenzyの最新アップデートでレアな魚や新しい水中イベントが登場。',
        'update-2': 'グラフィックと操作性が向上し、より快適な体験に。',
        'update-3': '毎日のチャレンジや特別な報酬も追加。',
        'update-4': '定期的なアップデートで新しいコンテンツと冒険を提供。',
        'update-5': 'コミュニティに参加して最新機能を発見し、フィードバックを共有しましょう！',
        
        // 常见问题解答部分
        'faq-1-q': 'このゲームは無料ですか？',
        'faq-1-a': 'はい、当プラットフォームのすべてのゲームは完全に無料です！',
        'faq-2-q': '動作環境に必要な条件は？',
        'faq-2-a': '本ゲームはほとんどの最新ブラウザで快適に動作します。ChromeやFirefoxを推奨します。',
        'faq-3-q': '進行状況はどうやって保存しますか？',
        'faq-3-a': 'ログインしていれば進行状況は自動保存されます。アカウント登録をおすすめします。',
        
        // 页脚部分
        'copyright': '© 2024 Fish Frenzy. 全権利所有。',
        'contact-us': 'お問い合わせ'
    },
    // 韩文翻译
    ko: {
        // 页头部分
        'popular-games': '인기 게임',
        'more-games': '더 많은 게임',
        'fullscreen': '전체 화면',
        
        // 游戏信息部分
        'game-features': '게임 특징',
        'how-to-play': '게임 방법',
        'what-players-love': '플레이어 리뷰',
        'faq': '자주 묻는 질문',
        
        // 游戏特点部分
        'feature-1': 'Meme-inspired madness and wild AI creatures',
        'feature-2': 'Weather-changing visuals and evolving backgrounds',
        'feature-3': 'Insane 2x mode for instant new scenes',
        'feature-4': 'Simple, addictive one-button gameplay',
        'feature-5': 'Regular updates and new surprises',
        
        // 游戏操作指南部分
        'controls': '마우스 왼쪽 버튼, WASD 또는 방향키로 이동하세요.',
        
        // 玩家评论部分
        'review-1': 'Fish Frenzy의 아름다운 수중 그래픽과 부드러운 조작감이 정말 좋아요. 도전과 재미가 가득해 물고기 게임 팬들에게 인기입니다.',
        'review-2': '이 게임은 독특한 물고기 수집과 보상 시스템이 돋보입니다. Fish Frenzy 커뮤니티는 친근하고 모험을 즐깁니다!',
        'review-3': '매번 새로운 수중 모험이 펼쳐집니다. 다양한 기능과 꾸준한 업데이트 덕분에 계속 플레이하게 됩니다.',
        'review-4': 'Fish Frenzy는 물고기 테마 게임 중 최고의 선택입니다. 경험이 정말 독보적입니다!',
        
        // 网站优势部分
        'why-1': 'Fish Frenzy는 독특한 수중 모험을 제공합니다. 희귀 물고기를 잡고, 업적을 달성하며, 끝없는 재미를 누릴 수 있습니다. 도전을 좋아하는 플레이어에게 적합합니다.',
        'why-2': '매일 보상, 특별 이벤트, 다양한 물고기 수집으로 항상 신선한 경험을 제공합니다.',
        'why-3': 'Fish Frenzy 커뮤니티에 참여해 전 세계 플레이어와 소통하세요. 팀워크, 정보 공유, 성취 축하를 장려합니다.',
        'why-4': 'Fish Frenzy는 새로운 기능, 물고기, 도전을 자주 추가합니다. 최신 소식을 확인하세요!',
        
        // 最新更新部分
        'update-1': 'Fish Frenzy의 최신 업데이트로 희귀 물고기와 새로운 수중 이벤트가 추가되었습니다.',
        'update-2': '그래픽과 조작감이 향상되어 더 나은 경험을 제공합니다.',
        'update-3': '이제 매일 도전과 특별 보상이 제공됩니다.',
        'update-4': '정기적인 업데이트로 항상 새로운 콘텐츠와 모험을 제공합니다.',
        'update-5': '커뮤니티에 참여해 최신 기능을 확인하고 의견을 나누세요!',
        
        // 常见问题解答部分
        'faq-1-q': '이 게임은 무료인가요?',
        'faq-1-a': '네, 저희 플랫폼의 모든 게임은 완전히 무료입니다!',
        'faq-2-q': '시스템 요구 사항이 있나요?',
        'faq-2-a': '이 게임은 대부분의 최신 브라우저에서 원활하게 실행됩니다. Chrome 또는 Firefox를 권장합니다.',
        'faq-3-q': '진행 상황은 어떻게 저장하나요?',
        'faq-3-a': '로그인하면 진행 상황이 자동 저장됩니다. 계정 등록을 권장합니다.',
        
        // 页脚部分
        'copyright': '© 2024 Fish Frenzy. 모든 권리 보유.',
        'contact-us': '문의하기'
    },
    // 西班牙语翻译
    es: {
        // 页头部分
        'popular-games': 'Juegos Populares',
        'more-games': 'Más Juegos',
        'fullscreen': 'Pantalla Completa',
        
        // 游戏信息部分
        'game-features': 'Características del Juego',
        'how-to-play': 'Cómo Jugar',
        'what-players-love': 'Lo que Amamos',
        'faq': 'Preguntas Frecuentes',
        
        // 游戏特点部分
        'feature-1': 'Meme-inspired madness and wild AI creatures',
        'feature-2': 'Weather-changing visuals and evolving backgrounds',
        'feature-3': 'Insane 2x mode for instant new scenes',
        'feature-4': 'Simple, addictive one-button gameplay',
        'feature-5': 'Regular updates and new surprises',
        
        // 游戏操作指南部分
        'controls': 'Usa el botón izquierdo del ratón, WASD o las flechas para moverte.',
        
        // 玩家评论部分
        'review-1': 'A los jugadores les encanta Fish Frenzy por sus gráficos submarinos vibrantes y su jugabilidad fluida. El juego ofrece desafíos emocionantes y diversión sin fin, siendo el favorito de los fanáticos de los juegos de peces.',
        'review-2': 'Este juego destaca por su colección única de peces y logros gratificantes. ¡La comunidad de Fish Frenzy es amigable y siempre está lista para nuevas aventuras!',
        'review-3': 'Con Fish Frenzy, cada partida es una nueva aventura acuática. Las funciones atractivas y las actualizaciones regulares me hacen volver por más.',
        'review-4': 'Fish Frenzy es la mejor opción para quienes aman los juegos de temática de peces. ¡La experiencia es realmente inigualable!',
        
        // 网站优势部分
        'why-1': 'Fish Frenzy ofrece una aventura submarina única. Puedes atrapar peces raros, desbloquear logros y disfrutar de diversión sin fin. El juego está diseñado para quienes buscan emoción y desafío.',
        'why-2': 'Disfruta de recompensas diarias, eventos especiales y una variedad de peces para coleccionar. La experiencia siempre es fresca y emocionante, haciendo que los jugadores regresen por más acción.',
        'why-3': 'Únete a la comunidad de Fish Frenzy y conecta con jugadores de todo el mundo. La plataforma fomenta el trabajo en equipo, el intercambio de consejos y la celebración de logros.',
        'why-4': 'Fish Frenzy se actualiza con frecuencia con nuevas funciones, peces y desafíos. ¡Mantente atento a las últimas novedades y mejoras!',
        
        // 最新更新部分
        'update-1': 'Fish Frenzy presenta nuevos peces raros y emocionantes eventos submarinos en la última actualización.',
        'update-2': 'Disfruta de gráficos mejorados y una jugabilidad más fluida para una mejor experiencia.',
        'update-3': 'Ahora con desafíos diarios y recompensas especiales para jugadores activos.',
        'update-4': 'Las actualizaciones regulares aseguran que el juego siempre traiga contenido nuevo y aventuras.',
        'update-5': '¡Únete a la comunidad para descubrir las últimas funciones y compartir tus comentarios!',
        
        // 常见问题解答部分
        'faq-1-q': '¿Este juego es gratuito?',
        'faq-1-a': '¡Sí, todos los juegos en nuestra plataforma son completamente gratuitos!',
        'faq-2-q': '¿Cuáles son los requisitos del sistema?',
        'faq-2-a': 'El juego funciona sin problemas en la mayoría de los navegadores modernos. Recomendamos usar Chrome o Firefox para la mejor experiencia.',
        'faq-3-q': '¿Cómo guardo mi progreso?',
        'faq-3-a': 'Tu progreso se guarda automáticamente cuando inicias sesión. Asegúrate de crear una cuenta para registrar tus logros.',
        
        // 页脚部分
        'copyright': '© 2024 Fish Frenzy. Todos los derechos reservados.',
        'contact-us': 'Contáctanos'
    }
};

/**
 * 更新网站语言函数
 * 根据选择的语言代码更新页面上所有带有data-i18n属性的元素文本
 * @param {string} lang - 语言代码（en, zh, ja, ko, es）
 */
function updateLanguage(lang) {
    // 查找所有带有data-i18n属性的元素，并更新其文本内容
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n'); // 获取翻译键名
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key]; // 设置对应语言的文本
        }
    });
    
    // 更新HTML文档的lang属性，有助于屏幕阅读器和搜索引擎识别页面语言
    document.documentElement.lang = lang;
    
    // 更新语言按钮的激活状态，高亮显示当前选中的语言
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active'); // 移除所有按钮的激活状态
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active'); // 为当前语言按钮添加激活状态
        }
    });
    
    // 将用户语言偏好保存到本地存储，下次访问时自动应用
    localStorage.setItem('preferred-language', lang);
}

// 初始化语言设置
// 在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 为页面元素添加data-i18n属性，标记需要翻译的文本
    document.querySelector('.game-links h2').setAttribute('data-i18n', 'popular-games');
    document.querySelector('.mini-games h2').setAttribute('data-i18n', 'more-games');
    document.querySelector('.fullscreen-btn').setAttribute('data-i18n', 'fullscreen');
    document.querySelector('.game-features h3').setAttribute('data-i18n', 'game-features');
    document.querySelector('.how-to-play h3').setAttribute('data-i18n', 'how-to-play');
    document.querySelector('.player-reviews h3').setAttribute('data-i18n', 'what-players-love');
    document.querySelector('.faq h3').setAttribute('data-i18n', 'faq');
    
    // 为所有语言按钮添加点击事件监听器
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang'); // 获取按钮的语言代码
            updateLanguage(lang); // 更新网站语言
        });
    });
    
    // 加载用户偏好语言或默认使用英语
    // 从本地存储中获取之前保存的语言偏好，如果没有则默认为英语
    const preferredLang = localStorage.getItem('preferred-language') || 'en';
    updateLanguage(preferredLang); // 应用语言设置
}); 