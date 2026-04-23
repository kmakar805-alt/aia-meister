import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

type ServiceKey = "muru" | "hekk" | "lehed" | "lumi" | "survepesu" | "kodu" | "trepp";

const services: { key: ServiceKey; label: string; unit: string; base: number; perUnit: number; minUnit: number }[] = [
  { key: "muru", label: "Muru niitmine", unit: "m²", base: 25, perUnit: 0.05, minUnit: 100 },
  { key: "hekk", label: "Hekkide lõikus", unit: "jooksev meeter", base: 20, perUnit: 3, minUnit: 5 },
  { key: "lehed", label: "Lehtede riisumine", unit: "m²", base: 30, perUnit: 0.08, minUnit: 100 },
  { key: "lumi", label: "Lumelükkamine", unit: "m²", base: 30, perUnit: 0.1, minUnit: 50 },
  { key: "survepesu", label: "Survepesu", unit: "m²", base: 25, perUnit: 4, minUnit: 5 },
  { key: "kodu", label: "Kodu/kontori koristus", unit: "tundi", base: 0, perUnit: 18, minUnit: 2 },
  { key: "trepp", label: "Trepikoja koristus (kuus)", unit: "korruseid", base: 30, perUnit: 12, minUnit: 1 },
];

const frequencies = [
  { key: "uks", label: "Ühekordne", multiplier: 1 },
  { key: "regular", label: "Regulaarne (-10%)", multiplier: 0.9 },
  { key: "leping", label: "Pikaajaline leping (-15%)", multiplier: 0.85 },
];

const PriceCalculator = () => {
  const [serviceKey, setServiceKey] = useState<ServiceKey>("muru");
  const [amount, setAmount] = useState<number>(200);
  const [freq, setFreq] = useState(frequencies[0].key);

  const service = services.find((s) => s.key === serviceKey)!;
  const frequency = frequencies.find((f) => f.key === freq)!;

  const estimate = useMemo(() => {
    const qty = Math.max(amount || 0, service.minUnit);
    const raw = service.base + qty * service.perUnit;
    const total = raw * frequency.multiplier;
    const low = Math.round(total * 0.9);
    const high = Math.round(total * 1.15);
    return { low, high };
  }, [amount, service, frequency]);

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-section">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
          <Calculator className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">Hinna kalkulaator</h3>
          <p className="text-xs text-muted-foreground">Orienteeruv hind — täpse pakkumise saad alt vormi kaudu.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Teenus</label>
          <select
            value={serviceKey}
            onChange={(e) => setServiceKey(e.target.value as ServiceKey)}
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
          >
            {services.map((s) => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Kogus ({service.unit})
          </label>
          <input
            type="number"
            min={0}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
          />
          <p className="text-xs text-muted-foreground mt-1">Min {service.minUnit} {service.unit}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Sagedus</label>
          <select
            value={freq}
            onChange={(e) => setFreq(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
          >
            {frequencies.map((f) => (
              <option key={f.key} value={f.key}>{f.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-primary-light rounded-xl p-5 text-center">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Orienteeruv hind</p>
        <div className="text-3xl md:text-4xl font-extrabold text-primary">
          {estimate.low} – {estimate.high} €
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Lõplik hind sõltub objekti keerukusest ja ligipääsust. Küsi täpset pakkumist allolevast vormist.
        </p>
      </div>
    </div>
  );
};

export default PriceCalculator;