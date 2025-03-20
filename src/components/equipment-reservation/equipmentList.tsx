import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Mock equipment data
const equipmentData = {
    msdo: [
        {
            id: "msdo-camera",
            name: "Camera",
            available: true,
            quantity: 5,
            quantityAvailable: 3,
        },
        {
            id: "msdo-speaker",
            name: "Speaker",
            available: true,
            quantity: 10,
            quantityAvailable: 8,
        },
        {
            id: "msdo-microphone",
            name: "Microphone",
            available: true,
            quantity: 15,
            quantityAvailable: 10,
        },
        {
            id: "msdo-extension",
            name: "Extension Wire",
            available: true,
            quantity: 20,
            quantityAvailable: 15,
        },
        {
            id: "msdo-projector",
            name: "Projector",
            available: false,
            quantity: 3,
            quantityAvailable: 0,
        },
        {
            id: "msdo-screen",
            name: "Projection Screen",
            available: true,
            quantity: 3,
            quantityAvailable: 2,
        },
        {
            id: "msdo-laptop",
            name: "Laptop",
            available: false,
            quantity: 5,
            quantityAvailable: 0,
        },
    ],
    opc: [
        {
            id: "opc-chairs",
            name: "Chairs",
            available: true,
            quantity: 200,
            quantityAvailable: 150,
        },
        {
            id: "opc-table",
            name: "Folding Table",
            available: true,
            quantity: 50,
            quantityAvailable: 30,
        },
        {
            id: "opc-extension",
            name: "Extension Wire",
            available: true,
            quantity: 15,
            quantityAvailable: 10,
        },
        {
            id: "opc-podium",
            name: "Podium",
            available: false,
            quantity: 2,
            quantityAvailable: 0,
        },
        {
            id: "opc-tent",
            name: "Event Tent",
            available: true,
            quantity: 5,
            quantityAvailable: 3,
        },
        {
            id: "opc-stage",
            name: "Portable Stage",
            available: false,
            quantity: 1,
            quantityAvailable: 0,
        },
    ],
};

interface EquipmentListProps {
    selectedEquipment: string[];
    onEquipmentChange: (equipmentIds: string[]) => void;
}

export default function EquipmentList({
    selectedEquipment,
    onEquipmentChange,
}: EquipmentListProps) {
    const [activeTab, setActiveTab] = useState("msdo");

    const toggleEquipment = (id: string, available: boolean) => {
        if (!available) return;

        if (selectedEquipment.includes(id)) {
            onEquipmentChange(selectedEquipment.filter((item) => item !== id));
        } else {
            onEquipmentChange([...selectedEquipment, id]);
        }
    };

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="msdo">MSDO Equipment</TabsTrigger>
                <TabsTrigger value="opc">OPC Equipment</TabsTrigger>
            </TabsList>

            <TabsContent value="msdo" className="pt-4">
                <Card>
                    <CardContent className="p-4">
                        <ScrollArea className="h-[300px]">
                            <div className="space-y-4">
                                {equipmentData.msdo.map((equipment) => (
                                    <div
                                        key={equipment.id}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id={equipment.id}
                                                checked={selectedEquipment.includes(
                                                    equipment.id,
                                                )}
                                                onCheckedChange={() =>
                                                    toggleEquipment(
                                                        equipment.id,
                                                        equipment.available,
                                                    )
                                                }
                                                disabled={!equipment.available}
                                            />
                                            <label
                                                htmlFor={equipment.id}
                                                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${!equipment.available ? "text-gray-400" : ""}`}
                                            >
                                                {equipment.name}
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Badge
                                                variant={
                                                    equipment.available
                                                        ? "outline"
                                                        : "destructive"
                                                }
                                            >
                                                {equipment.available
                                                    ? `${equipment.quantityAvailable}/${equipment.quantity} Available`
                                                    : "Not Available"}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="opc" className="pt-4">
                <Card>
                    <CardContent className="p-4">
                        <ScrollArea className="h-[300px]">
                            <div className="space-y-4">
                                {equipmentData.opc.map((equipment) => (
                                    <div
                                        key={equipment.id}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id={equipment.id}
                                                checked={selectedEquipment.includes(
                                                    equipment.id,
                                                )}
                                                onCheckedChange={() =>
                                                    toggleEquipment(
                                                        equipment.id,
                                                        equipment.available,
                                                    )
                                                }
                                                disabled={!equipment.available}
                                            />
                                            <label
                                                htmlFor={equipment.id}
                                                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${!equipment.available ? "text-gray-400" : ""}`}
                                            >
                                                {equipment.name}
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Badge
                                                variant={
                                                    equipment.available
                                                        ? "outline"
                                                        : "destructive"
                                                }
                                            >
                                                {equipment.available
                                                    ? `${equipment.quantityAvailable}/${equipment.quantity} Available`
                                                    : "Not Available"}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
