export interface PersonalInfo {
    name: string;
    title: string;
    roles: string[];
    bio: string;
    email: string;
    phone: string;
    location: string;
    social: {
        linkedin: string;
        twitter: string;
        github: string;
    };
}

export interface TimelineItem {
    year: string;
    title: string;
    organization: string;
    description: string;
    achievements: string[];
}

export interface Award {
    name: string;
    organization: string;
    date: string;
    description?: string;
    image?: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    title: string;
    organization: string;
    image?: string;
}

export interface ImpactNumber {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
}

export interface Competency {
    name: string;
    icon: string;
    description: string;
}
