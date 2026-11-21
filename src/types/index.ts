export interface SkillCategory {
  /** Название категории навыков */
  category: string;
  /** Список навыков в категории */
  items: string[];
}

/** Образование */
export interface EducationItem {
  /** Направление (будет выделено полужирным) */
  direction?: string;
  /** Степень / квалификация */
  degree: string;
  /** Учебное заведение */
  institution: string;
  /** Дата начала */
  startDate: string;
  /** Дата окончания (необязательно) */
  endDate?: string;
  /** Дополнительное описание */
  description?: string;
}

/** Опыт работы */
export interface ExperienceItem {
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

/** Проект */
export interface ProjectItem {
  /** Название проекта */
  title: string;
  /** Краткое описание */
  description?: string;
  /** Ссылка на репозиторий / демо */
  link?: string;
  /** Технологии, использованные в проекте */
  tech?: string[];
}

/** Социальная ссылка */
export interface SocialLink {
  name: string;
  url: string;
}

/** Контактная информация */
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

/** Основная структура резюме */
export interface Resume {
  /** Имя / Фамилия */
  name: string;
  /** Должность / Титул */
  title: string;
  /** Краткое описание / слоган */
  tagline?: string;
  /** Краткое резюме */
  summary: string;
  /** Образование */
  education: EducationItem[];
  /** Опыт работы */
  experience: ExperienceItem[];
  /** Проекты */
  projects: ProjectItem[];
  /** Навыки */
  skills: SkillCategory[];
  /** Социальные сети */
  socials: SocialLink[];
  /** Контактная информация */
  contact: ContactInfo;
  /** Авторские права */
  copyright: string;
  /** Путь к аватарке (опционально) */
  avatar?: string;
  /** Секция «О себе» */
  about: AboutInfo;
  /** Примечание об автономной разработке через AI-агентов */
  aiNote?: string;
}
export interface AboutHighlight {
  title: string;
  description: string;
}

/** Данные для секции «О себе» */
export interface AboutInfo {
  paragraphs: string[];
  highlights: AboutHighlight[];
}

/* При необходимости можно добавить дополнительные типы, используемые в других частях проекта */
