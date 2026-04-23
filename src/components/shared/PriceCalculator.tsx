import { useMemo, useState } from "react";
import { Calculator, Clock, ArrowDown, Receipt } from "lucide-react";

type ServiceKey =
  | "muru"
  | "hekk"
  | "lehed"
  | "lumi"
  | "survepesu"
  | "kodu"
  | "trepp";

const services: { key: ServiceKey; label: string }[] = [
  { key: "muru", label: "Muru niitmine" },
  { key: "hekk", label: "Hekkide lõikus" },
  { key: "lehed", label: "Lehtede riisumine" },
  { key: "lumi", label: "Lumelükkamine" },
  { key: "survepesu", label: "Survepesu" },
  { key: "kodu", label: "Kodu/kontori koristus" },
  { key: "trepp", label: "Trepikoja koristus" },
];

type LineItem = { label: string; amount: number };

interface State {
  // üldised
  region: string;
  objectType: "eramaja" | "korter" | "aripind";
  access: "lihtne" | "keskmine" | "keeruline";
  urgency: "tavaline" | "ekspress";

  // muru
  muruArea: number;
  muruHeight: "madal" | "keskmine" | "korge";
  muruObstacles: boolean;
  muruRemoval: boolean;

  // hekk
  hekkLength: number;
  hekkHeight: number;
  hekkType: "lihtne" | "tihe" | "okkaline";
  hekkRemoval: boolean;

  // lehed
  lehedArea: number;
  lehedAmount: "vahe" | "keskmine" | "palju";
  lehedRemoval: boolean;

  // lumi
  lumiArea: number;
  lumiDepth: number;
  lumiSalt: boolean;
  lumiRecurring: boolean;

  // survepesu
  surveArea: number;
  surveSurface: "kivi" | "puit" | "betoon";
  surveDirt: "kerge" | "tugev";
  surveChem: boolean;

  // kodu
  koduArea: number;
  koduRooms: number;
  koduType: "tavaline" | "syva";
  koduWindows: boolean;
  koduOven: boolean;
  koduFridge: boolean;

  // trepp
  treppFloors: number;
  treppApts: number;
  treppFreq: "1xn" | "2xn" | "kuu";
  treppWindows: boolean;
  treppHandrails: boolean;
}

const initial: State = {
  region: "Tallinn",
  objectType: "eramaja",
  access: "lihtne",
  urgency: "tavaline",

  muruArea: 200,
  muruHeight: "keskmine",
  muruObstacles: false,
  muruRemoval: false,

  hekkLength: 15,
  hekkHeight: 1.5,
  hekkType: "lihtne",
  hekkRemoval: false,

  lehedArea: 200,
  lehedAmount: "keskmine",
  lehedRemoval: false,

  lumiArea: 100,
  lumiDepth: 10,
  lumiSalt: false,
  lumiRecurring: false,

  surveArea: 30,
  surveSurface: "kivi",
  surveDirt: "kerge",
  surveChem: false,

  koduArea: 60,
  koduRooms: 3,
  koduType: "tavaline",
  koduWindows: false,
  koduOven: false,
  koduFridge: false,

  treppFloors: 4,
  treppApts: 12,
  treppFreq: "1xn",
  treppWindows: false,
  treppHandrails: false,
};

function computeService(s: ServiceKey, st: State): { items: LineItem[]; minutes: number } {
  const items: LineItem[] = [];
  let minutes = 0;

  switch (s) {
    case "muru": {
      items.push({ label: "Baashind", amount: 25 });
      items.push({ label: `Pindala (${st.muruArea} m²)`, amount: st.muruArea * 0.06 });
      const heightAdd = st.muruHeight === "korge" ? 0.04 : st.muruHeight === "keskmine" ? 0.02 : 0;
      if (heightAdd) items.push({ label: `Kõrge muru lisatasu`, amount: st.muruArea * heightAdd });
      if (st.muruObstacles) items.push({ label: "Takistused (puud, kivid)", amount: 15 });
      if (st.muruRemoval) items.push({ label: "Rohu äravedu", amount: 20 + st.muruArea * 0.02 });
      minutes = 20 + st.muruArea * 0.6;
      break;
    }
    case "hekk": {
      items.push({ label: "Baashind", amount: 20 });
      const typeMul = st.hekkType === "okkaline" ? 4.5 : st.hekkType === "tihe" ? 3.5 : 2.8;
      items.push({
        label: `Hekk ${st.hekkLength} m × ${st.hekkHeight} m`,
        amount: st.hekkLength * st.hekkHeight * typeMul,
      });
      if (st.hekkRemoval) items.push({ label: "Jäätmete äravedu", amount: 25 });
      minutes = 15 + st.hekkLength * st.hekkHeight * 4;
      break;
    }
    case "lehed": {
      items.push({ label: "Baashind", amount: 30 });
      const amountMul = st.lehedAmount === "palju" ? 0.18 : st.lehedAmount === "keskmine" ? 0.12 : 0.07;
      items.push({ label: `Ala ${st.lehedArea} m² (${st.lehedAmount})`, amount: st.lehedArea * amountMul });
      if (st.lehedRemoval) items.push({ label: "Lehtede äravedu", amount: 25 + st.lehedArea * 0.04 });
      minutes = 25 + st.lehedArea * (st.lehedAmount === "palju" ? 1 : 0.6);
      break;
    }
    case "lumi": {
      items.push({ label: "Baashind", amount: 30 });
      const depthMul = st.lumiDepth >= 20 ? 0.25 : st.lumiDepth >= 10 ? 0.15 : 0.08;
      items.push({ label: `Ala ${st.lumiArea} m² · ${st.lumiDepth} cm lund`, amount: st.lumiArea * depthMul });
      if (st.lumiSalt) items.push({ label: "Soolatamine / libedusetõrje", amount: 15 + st.lumiArea * 0.05 });
      if (st.lumiRecurring) items.push({ label: "Korduv teenus (-15%)", amount: -(30 + st.lumiArea * depthMul) * 0.15 });
      minutes = 20 + st.lumiArea * 0.5;
      break;
    }
    case "survepesu": {
      items.push({ label: "Baashind", amount: 25 });
      const surfaceMul = st.surveSurface === "puit" ? 5 : st.surveSurface === "betoon" ? 4 : 3.5;
      const dirtMul = st.surveDirt === "tugev" ? 1.4 : 1;
      items.push({
        label: `${st.surveArea} m² ${st.surveSurface} · ${st.surveDirt} mustus`,
        amount: st.surveArea * surfaceMul * dirtMul,
      });
      if (st.surveChem) items.push({ label: "Keemiline puhastus", amount: 20 + st.surveArea * 0.5 });
      minutes = 15 + st.surveArea * 4 * dirtMul;
      break;
    }
    case "kodu": {
      const baseRate = st.koduType === "syva" ? 1.6 : 1;
      items.push({ label: `Baashind (${st.koduType === "syva" ? "süvapuhastus" : "tavaline"})`, amount: 25 * baseRate });
      items.push({ label: `Pindala ${st.koduArea} m² · ${st.koduRooms} tuba`, amount: st.koduArea * 0.7 * baseRate + st.koduRooms * 5 });
      if (st.koduWindows) items.push({ label: "Aknad", amount: 25 });
      if (st.koduOven) items.push({ label: "Ahju puhastus", amount: 20 });
      if (st.koduFridge) items.push({ label: "Külmiku puhastus", amount: 15 });
      minutes = 30 + st.koduArea * 1.2 * baseRate;
      break;
    }
    case "trepp": {
      const freqMul = st.treppFreq === "2xn" ? 2 : st.treppFreq === "1xn" ? 1 : 0.25;
      items.push({ label: "Baashind (kuus)", amount: 30 });
      items.push({
        label: `${st.treppFloors} korrust · ${st.treppApts} korterit`,
        amount: (st.treppFloors * 8 + st.treppApts * 2) * freqMul,
      });
      if (st.treppWindows) items.push({ label: "Aknad", amount: 20 * freqMul });
      if (st.treppHandrails) items.push({ label: "Käsipuud", amount: 10 * freqMul });
      minutes = (20 + st.treppFloors * 15) * freqMul;
      break;
    }
  }
  return { items, minutes };
}

const PriceCalculator = () => {
  const [serviceKey, setServiceKey] = useState<ServiceKey>("muru");
  const [st, setSt] = useState<State>(initial);

  const update = <K extends keyof State>(k: K, v: State[K]) => setSt((s) => ({ ...s, [k]: v }));

  const result = useMemo(() => {
    const { items, minutes } = computeService(serviceKey, st);

    // Üldised lisad
    const subtotal = items.reduce((sum, i) => sum + i.amount, 0);
    const extras: LineItem[] = [];
    if (st.access === "keskmine") extras.push({ label: "Keskmine ligipääs (+10%)", amount: subtotal * 0.1 });
    if (st.access === "keeruline") extras.push({ label: "Keeruline ligipääs (+20%)", amount: subtotal * 0.2 });
    if (st.urgency === "ekspress") extras.push({ label: "Ekspressteenus (+30%)", amount: subtotal * 0.3 });
    if (st.objectType === "aripind") extras.push({ label: "Äripind (+10%)", amount: subtotal * 0.1 });

    const all = [...items, ...extras];
    const total = all.reduce((sum, i) => sum + i.amount, 0);
    const low = Math.max(0, Math.round(total * 0.9));
    const high = Math.round(total * 1.15);

    const totalMinutes = minutes * (st.urgency === "ekspress" ? 0.85 : 1);
    const hours = totalMinutes / 60;
    const timeLabel = hours < 1 ? `${Math.round(totalMinutes)} min` : `${hours.toFixed(1)} h`;

    return { items: all, low, high, timeLabel };
  }, [serviceKey, st]);

  const scrollToForm = () => {
    const el = document.getElementById("paringu-vorm");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const inputCls =
    "w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none";
  const labelCls = "block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide";

  return (
    <div className="bg-card rounded-2xl border border-border shadow-section overflow-hidden">
      {/* Header */}
      <div className="bg-primary p-6 md:p-7 text-primary-foreground">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Hinna kalkulaator</h3>
            <p className="text-xs text-primary-foreground/80">Reaalajas hinnang — täpne pakkumine vormi kaudu.</p>
          </div>
        </div>
      </div>

      {/* Service tabs */}
      <div className="border-b border-border bg-section-alt p-3 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {services.map((s) => (
            <button
              key={s.key}
              onClick={() => setServiceKey(s.key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                serviceKey === s.key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Inputs */}
        <div className="lg:col-span-3 p-6 md:p-7 space-y-6 border-b lg:border-b-0 lg:border-r border-border">
          {/* Üldised */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Üldised andmed</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Asukoht</label>
                <input className={inputCls} value={st.region} onChange={(e) => update("region", e.target.value)} placeholder="nt Tallinn" />
              </div>
              <div>
                <label className={labelCls}>Objekti tüüp</label>
                <select className={inputCls} value={st.objectType} onChange={(e) => update("objectType", e.target.value as State["objectType"])}>
                  <option value="eramaja">Eramaja</option>
                  <option value="korter">Korter</option>
                  <option value="aripind">Äripind</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Ligipääsetavus</label>
                <select className={inputCls} value={st.access} onChange={(e) => update("access", e.target.value as State["access"])}>
                  <option value="lihtne">Lihtne</option>
                  <option value="keskmine">Keskmine</option>
                  <option value="keeruline">Keeruline</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Kiireloomulisus</label>
                <select className={inputCls} value={st.urgency} onChange={(e) => update("urgency", e.target.value as State["urgency"])}>
                  <option value="tavaline">Tavaline</option>
                  <option value="ekspress">Ekspress</option>
                </select>
              </div>
            </div>
          </div>

          {/* Service-specific */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Teenuse andmed</h4>

            {serviceKey === "muru" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Pindala (m²)</label>
                  <input type="number" min={0} className={inputCls} value={st.muruArea} onChange={(e) => update("muruArea", +e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Muru kõrgus</label>
                  <select className={inputCls} value={st.muruHeight} onChange={(e) => update("muruHeight", e.target.value as State["muruHeight"])}>
                    <option value="madal">Madal</option>
                    <option value="keskmine">Keskmine</option>
                    <option value="korge">Kõrge</option>
                  </select>
                </div>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" checked={st.muruObstacles} onChange={(e) => update("muruObstacles", e.target.checked)} />
                  Takistused (puud, kivid)
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" checked={st.muruRemoval} onChange={(e) => update("muruRemoval", e.target.checked)} />
                  Rohu äravedu
                </label>
              </div>
            )}

            {serviceKey === "hekk" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Heki pikkus (m)</label>
                  <input type="number" min={0} className={inputCls} value={st.hekkLength} onChange={(e) => update("hekkLength", +e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Heki kõrgus (m)</label>
                  <input type="number" step="0.1" min={0} className={inputCls} value={st.hekkHeight} onChange={(e) => update("hekkHeight", +e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>Heki tüüp</label>
                  <select className={inputCls} value={st.hekkType} onChange={(e) => update("hekkType", e.target.value as State["hekkType"])}>
                    <option value="lihtne">Lihtne</option>
                    <option value="tihe">Tihe</option>
                    <option value="okkaline">Okkaline</option>
                  </select>
                </div>
                <label className="flex items-center gap-2 text-sm text-foreground sm:col-span-2">
                  <input type="checkbox" checked={st.hekkRemoval} onChange={(e) => update("hekkRemoval", e.target.checked)} />
                  Jäätmete äravedu
                </label>
              </div>
            )}

            {serviceKey === "lehed" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Ala suurus (m²)</label>
                  <input type="number" min={0} className={inputCls} value={st.lehedArea} onChange={(e) => update("lehedArea", +e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Lehtede kogus</label>
                  <select className={inputCls} value={st.lehedAmount} onChange={(e) => update("lehedAmount", e.target.value as State["lehedAmount"])}>
                    <option value="vahe">Vähe</option>
                    <option value="keskmine">Keskmine</option>
                    <option value="palju">Palju</option>
                  </select>
                </div>
                <label className="flex items-center gap-2 text-sm text-foreground sm:col-span-2">
                  <input type="checkbox" checked={st.lehedRemoval} onChange={(e) => update("lehedRemoval", e.target.checked)} />
                  Äravedu
                </label>
              </div>
            )}

            {serviceKey === "lumi" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Ala suurus (m²)</label>
                  <input type="number" min={0} className={inputCls} value={st.lumiArea} onChange={(e) => update("lumiArea", +e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Lume paksus (cm)</label>
                  <input type="number" min={0} className={inputCls} value={st.lumiDepth} onChange={(e) => update("lumiDepth", +e.target.value)} />
                </div>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" checked={st.lumiSalt} onChange={(e) => update("lumiSalt", e.target.checked)} />
                  Soolatamine
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" checked={st.lumiRecurring} onChange={(e) => update("lumiRecurring", e.target.checked)} />
                  Korduv teenus
                </label>
              </div>
            )}

            {serviceKey === "survepesu" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Pind (m²)</label>
                  <input type="number" min={0} className={inputCls} value={st.surveArea} onChange={(e) => update("surveArea", +e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Pinna tüüp</label>
                  <select className={inputCls} value={st.surveSurface} onChange={(e) => update("surveSurface", e.target.value as State["surveSurface"])}>
                    <option value="kivi">Kivi</option>
                    <option value="puit">Puit</option>
                    <option value="betoon">Betoon</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Mustuse tase</label>
                  <select className={inputCls} value={st.surveDirt} onChange={(e) => update("surveDirt", e.target.value as State["surveDirt"])}>
                    <option value="kerge">Kerge</option>
                    <option value="tugev">Tugev</option>
                  </select>
                </div>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" checked={st.surveChem} onChange={(e) => update("surveChem", e.target.checked)} />
                  Keemiline puhastus
                </label>
              </div>
            )}

            {serviceKey === "kodu" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Pindala (m²)</label>
                  <input type="number" min={0} className={inputCls} value={st.koduArea} onChange={(e) => update("koduArea", +e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Tubade arv</label>
                  <input type="number" min={1} className={inputCls} value={st.koduRooms} onChange={(e) => update("koduRooms", +e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>Koristuse tüüp</label>
                  <select className={inputCls} value={st.koduType} onChange={(e) => update("koduType", e.target.value as State["koduType"])}>
                    <option value="tavaline">Tavaline</option>
                    <option value="syva">Süvapuhastus</option>
                  </select>
                </div>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" checked={st.koduWindows} onChange={(e) => update("koduWindows", e.target.checked)} /> Aknad
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" checked={st.koduOven} onChange={(e) => update("koduOven", e.target.checked)} /> Ahi
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" checked={st.koduFridge} onChange={(e) => update("koduFridge", e.target.checked)} /> Külmik
                </label>
              </div>
            )}

            {serviceKey === "trepp" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Korruste arv</label>
                  <input type="number" min={1} className={inputCls} value={st.treppFloors} onChange={(e) => update("treppFloors", +e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Korterite arv</label>
                  <input type="number" min={1} className={inputCls} value={st.treppApts} onChange={(e) => update("treppApts", +e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>Sagedus</label>
                  <select className={inputCls} value={st.treppFreq} onChange={(e) => update("treppFreq", e.target.value as State["treppFreq"])}>
                    <option value="1xn">1× nädalas</option>
                    <option value="2xn">2× nädalas</option>
                    <option value="kuu">Kord kuus</option>
                  </select>
                </div>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" checked={st.treppWindows} onChange={(e) => update("treppWindows", e.target.checked)} /> Aknad
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" checked={st.treppHandrails} onChange={(e) => update("treppHandrails", e.target.checked)} /> Käsipuud
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Result panel */}
        <div className="lg:col-span-2 p-6 md:p-7 bg-section-alt">
          <div className="bg-primary rounded-xl p-5 text-primary-foreground text-center mb-4">
            <p className="text-xs uppercase tracking-wider text-primary-foreground/80 font-semibold mb-1">Orienteeruv hind</p>
            <div className="text-3xl md:text-4xl font-extrabold">
              {result.low} – {result.high} €
            </div>
            <div className="mt-3 inline-flex items-center gap-2 text-sm text-primary-foreground/85">
              <Clock className="w-4 h-4" />
              <span>Ligikaudne tööaeg: <strong>{result.timeLabel}</strong></span>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Receipt className="w-4 h-4 text-primary" />
              <h5 className="text-sm font-bold text-foreground">Hindade jaotus</h5>
            </div>
            <ul className="space-y-1.5 max-h-64 overflow-y-auto">
              {result.items.map((it, i) => (
                <li key={i} className="flex justify-between text-xs gap-3">
                  <span className="text-muted-foreground">{it.label}</span>
                  <span className={`font-semibold tabular-nums ${it.amount < 0 ? "text-accent" : "text-foreground"}`}>
                    {it.amount < 0 ? "" : "+"}{it.amount.toFixed(2)} €
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={scrollToForm}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent-hover transition-colors shadow-md"
          >
            Küsi pakkumist
            <ArrowDown className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-muted-foreground text-center mt-2">
            Hind on orienteeruv. Lõplik pakkumine sõltub objekti ülevaatusest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;