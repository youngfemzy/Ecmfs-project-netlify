export const interests=['Aluminium & steel boat construction','Larger vessels above 85 ft','Concrete floats','Boat maintenance & management','Yacht construction & brokering','Other'] as const;
export type QuoteForm={name:string;organisation:string;phone:string;interest:string;message:string};
export function validateQuote(f:QuoteForm){const errors:Partial<Record<keyof QuoteForm,string>>={};if(!f.name.trim())errors.name='Please enter your name.';if(!f.message.trim())errors.message='Please enter your message.';return errors;}
export function quoteHref(f:QuoteForm){return `https://wa.me/2348038457735?text=${encodeURIComponent(`Hello ECMFS, my name is ${f.name.trim()} from ${f.organisation.trim()}. Interested in: ${f.interest}. ${f.message.trim()}. Phone: ${f.phone.trim()}`)}`;}
