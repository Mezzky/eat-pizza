import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    "first name": "",
    "last name": "",
    "phone number": "",
    email: "",
    domicile: "denpasar",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const domiciles = ["Denpasar", "Gianyar", "Badung", "Singaraja"];

  async function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(import.meta.env.PUBLIC_SPREADSHEET_SCRIPT_URL, {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        toast({
          title: "Terima kasih! Form telah berhasil dikirim.",
        });
        setFormData({
          "first name": "",
          "last name": "",
          "phone number": "",
          email: "",
          domicile: "denpasar",
          comment: "",
        });
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Maaf, terjadi kesalahan. Silakan coba lagi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative z-10 flex flex-col justify-center gap-6 rounded-lg bg-white p-5 tablet:p-10 laptop:gap-10 laptop:rounded-none laptop:rounded-bl-lg laptop:rounded-tl-lg desktop:p-24">
      <div className="flex flex-col gap-2 laptop:gap-5">
        <h2 className="font-esamanru text-xl font-semibold text-black desktop:text-5xl desktop:leading-tight">
          Tertarik jadi bagian dari keluarga besar EatPizza Indonesia?
        </h2>
        <p className="font-esamanru text-sm font-medium text-black desktop:text-3xl">
          Isi form di bawah ini untuk mulai perjalanan seru bareng kami!
        </p>
      </div>

      <form onSubmit={handleSubmit} autoComplete="off" className="flex w-full flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName" className="font-esamanru text-sm text-black desktop:text-lg">
              Nama Depan
            </label>
            <input
              required
              id="firstName"
              name="first name"
              type="text"
              placeholder="Agus"
              value={formData["first name"]}
              onChange={handleChange}
              className="w-full rounded-sm border border-slate-500 p-2 text-sm text-slate-500 focus:ring-slate-900 desktop:text-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName" className="font-esamanru text-sm text-black desktop:text-lg">
              Nama Belakang
            </label>
            <input
              required
              id="lastName"
              name="last name"
              type="text"
              placeholder="Setiawan"
              value={formData["last name"]}
              onChange={handleChange}
              className="w-full rounded-sm border border-slate-500 p-2 text-sm text-slate-500 focus:ring-slate-900 desktop:text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phoneNumber"
              className="font-esamanru text-sm text-black desktop:text-lg"
            >
              Nomor HP
            </label>
            <input
              required
              id="phoneNumber"
              name="phone number"
              type="number"
              placeholder="+62"
              value={formData["phone number"]}
              onChange={handleChange}
              className="w-full rounded-sm border border-slate-500 p-2 text-sm text-slate-500 focus:ring-slate-900 desktop:text-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-esamanru text-sm text-black desktop:text-lg">
              Email
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="agussetiawan@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-sm border border-slate-500 p-2 text-sm text-slate-500 focus:ring-slate-900 desktop:text-lg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="domicile" className="font-esamanru text-sm text-black desktop:text-lg">
            Domisili
          </label>
          <select
            id="domicile"
            name="domicile"
            value={formData.domicile}
            onChange={handleChange}
            className="w-full rounded-sm border border-slate-500 p-2 text-sm text-slate-500 focus:ring-slate-900 desktop:text-lg"
          >
            {domiciles.map((dom) => (
              <option key={dom} value={dom}>
                {dom}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="comment" className="font-esamanru text-sm text-black desktop:text-lg">
            Komentar
          </label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Komentar disini..."
            value={formData.comment}
            onChange={handleChange}
            className="h-32 w-full rounded-sm border border-slate-500 p-2 text-sm text-slate-500 focus:ring-slate-900 desktop:text-lg"
          />
        </div>

        <p className="font-esamanru text-sm font-light text-slate-900 desktop:text-lg desktop:font-medium">
          Pengajuan pernyataan ini tidak mewajibkan Anda atau kami untuk berpartisipasi atau memberi
          Anda peluang bisnis apa pun
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-third px-4 py-2 font-medium text-white hover:bg-opacity-80 disabled:cursor-not-allowed disabled:opacity-50 desktop:text-xl"
        >
          {isSubmitting ? "Mengirim..." : "Kirim"}
        </button>
      </form>
    </div>
  );
};