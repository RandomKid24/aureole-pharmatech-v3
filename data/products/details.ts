import { ProductDetail } from './types';
import { humidityStabilityChamber } from './stability/humidity-stability';
import { bodIncubator } from './stability/bod-incubator';
import { coldChamber } from './stability/cold-chamber';
import { deepFreezer } from './stability/deep-freezer';
import { ultraLowDeepFreezer } from './stability/ultra-low-deep-freezer';
import { photostabilityChamber } from './stability/photostability-chamber';
import { pharmaRefrigerator } from './stability/pharma-refrigerator';
import { hotAirOven } from './stability/hot-air-oven';
import { vacuumOven } from './stability/vacuum-oven';
import { muffleFurnace } from './stability/muffle-furnace';
import { walkInHumidityChamber } from './stability/walk-in-humidity';
import { walkInColdChamber } from './stability/walk-in-cold';
import { walkInBodIncubator } from './stability/walk-in-bod';
import { walkInDeepFreezer } from './stability/walk-in-deep-freezer';
import { ultrasonicBath } from './tabletop/ultrasonic-bath';
import { waterBath } from './tabletop/water-bath';
import { steamBath } from './tabletop/steam-bath';
import { oilBath } from './tabletop/oil-bath';
import { dryBath } from './tabletop/dry-bath';
import { airSampler } from './tabletop/air-sampler';
import { ssAccessories } from './tabletop/ss-accessories';
import { cFrameSystem } from './furniture/c-frame-system';
import { hFrameSystem } from './furniture/h-frame-system';
import { plinthPedestalSystem } from './furniture/plinth-pedestal-system';
import { laboratoryWorktops } from './furniture/laboratory-worktops';
import { fumeCupboards } from './furniture/fume-cupboards';
import { laboratoryFittings } from './furniture/laboratory-fittings';
import { hardware } from './furniture/hardware';
import { storageCabinets } from './furniture/storage-cabinets';
import { labAccessories } from './furniture/lab-accessories';

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
    "Humidity Chamber": humidityStabilityChamber,
    "BOD Incubator": bodIncubator,
    "Cold Chamber": coldChamber,
    "Deep Freezer (upto -20°C / upto -40°C)": deepFreezer,
    "Ultra Low Deep Freezer (-80°C)": ultraLowDeepFreezer,
    "Photostability Chamber": photostabilityChamber,
    "Pharma Refrigerator / Dual Zone Chamber": pharmaRefrigerator,
    "Hot Air Oven": hotAirOven,
    "Vacuum Oven": vacuumOven,
    "Muffle Furnace": muffleFurnace,
    "Walk In Humidity Chamber": walkInHumidityChamber,
    "Walk In Cold Chamber": walkInColdChamber,
    "Walk In BOD Incubator": walkInBodIncubator,
    "Walk In Deep Freezer": walkInDeepFreezer,
    "Ultrasonic Bath": ultrasonicBath,
    "Water Bath": waterBath,
    "Steam Bath": steamBath,
    "Oil Bath": oilBath,
    "Dry Bath": dryBath,
    "Air Sampler": airSampler,
    "Stainless Steel Items & Accessories": ssAccessories,
    "C-Frame System": cFrameSystem,
    "H-Frame System": hFrameSystem,
    "Plinth & Pedestal System": plinthPedestalSystem,
    "Laboratory Worktops": laboratoryWorktops,
    "Fume Cupboards": fumeCupboards,
    "Laboratory Fittings": laboratoryFittings,
    "Hardware": hardware,
    "Storage Cabinets": storageCabinets,
    "Lab Accessories": labAccessories,
};
