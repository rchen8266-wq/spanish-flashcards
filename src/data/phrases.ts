import { Phrase } from "@/types";

export const phrases: Phrase[] = [
  // Greetings
  {
    id: "g1",
    spanish: "¿Qué onda?",
    english: "What's up? / What's going on?",
    chinese: "怎么了？/ 最近咋样？",
    category: "Greeting",
    pronunciation: "keh ON-dah",
  },
  {
    id: "g2",
    spanish: "¿Cómo estás?",
    english: "How are you?",
    chinese: "你好吗？",
    category: "Greeting",
    pronunciation: "KOH-moh es-TAHS",
  },
  {
    id: "g3",
    spanish: "Buenos días",
    english: "Good morning",
    chinese: "早上好",
    category: "Greeting",
    pronunciation: "BWEH-nos DEE-as",
  },
  {
    id: "g4",
    spanish: "Hasta luego",
    english: "See you later / Goodbye",
    chinese: "再见",
    category: "Greeting",
    pronunciation: "AH-stah LWEH-go",
  },

  // Family
  {
    id: "f1",
    spanish: "Mi familia es muy unida.",
    english: "My family is very close.",
    chinese: "我的家人关系很亲密。",
    category: "Family",
    pronunciation: "mee fah-MEE-lyah es MWEE oo-NEE-dah",
  },
  {
    id: "f2",
    spanish: "Tengo tres hermanos.",
    english: "I have three siblings.",
    chinese: "我有三个兄弟姐妹。",
    category: "Family",
    pronunciation: "TEN-go tres er-MAH-nos",
  },
  {
    id: "f3",
    spanish: "Mi abuela cocina muy rico.",
    english: "My grandma cooks really well.",
    chinese: "我奶奶做饭特别好吃。",
    category: "Family",
    pronunciation: "mee ah-BWEH-lah ko-SEE-nah MWEE REE-ko",
  },
  {
    id: "f4",
    spanish: "¿Tienes novio o novia?",
    english: "Do you have a boyfriend or girlfriend?",
    chinese: "你有男朋友还是女朋友？",
    category: "Family",
    pronunciation: "TYEH-nes NO-vyoh oh NO-vyah",
  },

  // Food
  {
    id: "fd1",
    spanish: "¡Está muy rico!",
    english: "It's very delicious!",
    chinese: "好好吃！",
    category: "Food",
    pronunciation: "es-TAH MWEE REE-ko",
  },
  {
    id: "fd2",
    spanish: "¿Me da unos tacos, por favor?",
    english: "Can I have some tacos, please?",
    chinese: "请给我一些玉米卷饼，谢谢。",
    category: "Food",
    pronunciation: "meh dah OO-nos TAH-kos por fah-VOR",
  },
  {
    id: "fd3",
    spanish: "Quiero agua fresca.",
    english: "I want agua fresca.",
    chinese: "我想要鲜果水。",
    category: "Food",
    pronunciation: "KYEH-ro AH-gwah FRES-kah",
  },
  {
    id: "fd4",
    spanish: "¿Tiene salsa picante?",
    english: "Do you have spicy salsa?",
    chinese: "有辣酱吗？",
    category: "Food",
    pronunciation: "TYEH-neh SAL-sah pee-KAN-teh",
  },

  // Polite
  {
    id: "p1",
    spanish: "Con permiso",
    english: "Excuse me / With your permission",
    chinese: "借过一下",
    category: "Polite",
    pronunciation: "kon per-MEE-so",
  },
  {
    id: "p2",
    spanish: "Muchas gracias",
    english: "Thank you very much",
    chinese: "非常感谢",
    category: "Polite",
    pronunciation: "MOO-chas GRAH-syahs",
  },
  {
    id: "p3",
    spanish: "De nada, para servirle.",
    english: "You're welcome, at your service.",
    chinese: "不客气，随时为您效劳。",
    category: "Polite",
    pronunciation: "deh NAH-dah PAH-rah ser-VEER-leh",
  },
  {
    id: "p4",
    spanish: "Disculpe, ¿me puede ayudar?",
    english: "Excuse me, can you help me?",
    chinese: "不好意思，能帮我一下吗？",
    category: "Polite",
    pronunciation: "dees-KOOL-peh meh PWEH-deh ah-yoo-DAR",
  },

  // Daily Life
  {
    id: "d1",
    spanish: "Voy al mercado.",
    english: "I'm going to the market.",
    chinese: "我去市场。",
    category: "Daily Life",
    pronunciation: "VOY al mer-KAH-do",
  },
  {
    id: "d2",
    spanish: "¿A qué hora abre?",
    english: "What time does it open?",
    chinese: "几点开门？",
    category: "Daily Life",
    pronunciation: "ah keh OH-rah AH-breh",
  },
  {
    id: "d3",
    spanish: "Estoy muy cansado/a.",
    english: "I'm very tired.",
    chinese: "我很累。",
    category: "Daily Life",
    pronunciation: "es-TOY MWEE kan-SAH-do",
  },
  {
    id: "d4",
    spanish: "¿Cuánto cuesta?",
    english: "How much does it cost?",
    chinese: "多少钱？",
    category: "Daily Life",
    pronunciation: "KWAN-toh KWES-tah",
  },

  // Small Talk
  {
    id: "s1",
    spanish: "¿De dónde eres?",
    english: "Where are you from?",
    chinese: "你是哪里人？",
    category: "Small Talk",
    pronunciation: "deh DON-deh EH-res",
  },
  {
    id: "s2",
    spanish: "Hace mucho calor hoy.",
    english: "It's very hot today.",
    chinese: "今天好热。",
    category: "Small Talk",
    pronunciation: "AH-seh MOO-cho kah-LOR oy",
  },
  {
    id: "s3",
    spanish: "¡Qué padre!",
    english: "How cool! / Awesome!",
    chinese: "太棒了！",
    category: "Small Talk",
    pronunciation: "keh PAH-dreh",
  },
  {
    id: "s4",
    spanish: "No manches, ¿en serio?",
    english: "No way, seriously? (mild exclamation)",
    chinese: "不会吧，真的假的？",
    category: "Small Talk",
    pronunciation: "no MAN-ches en SEH-ryoh",
  },
];

export const categories = [
  "All",
  "Greeting",
  "Family",
  "Food",
  "Polite",
  "Daily Life",
  "Small Talk",
] as const;

export type CategoryFilter = (typeof categories)[number];
