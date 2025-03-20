import { registrationFormAtom } from "@/lib/atoms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Sample departments
const departments = [
    { id: "1", name: "Marketing" },
    { id: "2", name: "Human Resources" },
    { id: "3", name: "Finance" },
    { id: "4", name: "IT" },
    { id: "5", name: "Operations" },
    { id: "6", name: "Research & Development" },
    { id: "7", name: "Customer Service" },
    { id: "8", name: "Sales" },
    { id: "9", name: "Legal" },
    { id: "10", name: "Executive" },
];

// Form schema with validation
const personalInfoSchema = z.object({
    idNumber: z
        .string()
        .min(5, { message: "ID number must be at least 5 characters" }),
    firstName: z
        .string()
        .min(2, { message: "First name must be at least 2 characters" }),
    lastName: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters" }),
    department: z.string({ required_error: "Please select a department" }),
});

type PersonalInfoValues = z.infer<typeof personalInfoSchema>;

interface PersonalInfoStepProps {
    onNext: () => void;
}

export default function PersonalInfoStep({ onNext }: PersonalInfoStepProps) {
    const [formData, setFormData] = useAtom(registrationFormAtom);

    const form = useForm<PersonalInfoValues>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: {
            idNumber: formData.idNumber,
            firstName: formData.firstName,
            lastName: formData.lastName,
            department: formData.department,
        },
    });

    const onSubmit = (values: PersonalInfoValues) => {
        // Update the global form state
        setFormData({
            ...formData,
            ...values,
        });

        // Move to the next step
        onNext();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="idNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ID Number</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your ID number"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Your employee or student ID number
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your first name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your last name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Department</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your department" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {departments.map((dept) => (
                                            <SelectItem
                                                key={dept.id}
                                                value={dept.id}
                                            >
                                                {dept.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex justify-end">
                    <Button type="submit">Continue</Button>
                </div>
            </form>
        </Form>
    );
}
