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
import {
    wallSideBench,
    islandBench,
    fumeHood,
    storageCabinets,
    laboratoryFittings,
    labAccessories,
    ssAccessories
} from './furniture/lab-furniture-data';

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
    "Wall Side Bench": wallSideBench,
    "Island Bench": islandBench,
    "Corner Bench": wallSideBench,
    "Anti Vibration Table": wallSideBench,
    "Fume Hood": fumeHood,
    "Spot Extractor": fumeHood,
    "Overhead Cabinet": storageCabinets,
    "Tall Storage Cabinet": storageCabinets,
    "Storage Cabinets": storageCabinets,
    "Laboratory Sinks": labAccessories,
    "Laboratory Fittings": laboratoryFittings,
    "Lab Accessories": labAccessories,
};
