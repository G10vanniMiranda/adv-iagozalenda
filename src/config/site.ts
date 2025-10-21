export const SITE = {
  name: "Adv Iago Zalenda",
  domain: "www.zalendaadvogados.com.br",
  email: "zalendaadvogados@gmail.com",
  phoneDisplay: "(69) 99330-9361",
  phoneE164: "5569993309361",
  cnpj: "55.514.360/0001-01",
  city: "Porto Velho/RO",
  whatsMessage: "Olá, Dr. Iago! Vim pelo site e preciso de orientação em um caso criminal.",
};

export const WHATS_HREF = `https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent(SITE.whatsMessage)}`;
