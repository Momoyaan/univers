import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Update the form schema to include ID Number
const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    idNumber: z.string().min(2, {
        message: "ID Number must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    role: z.string({
        required_error: "Please select a role.",
    }),
    department: z.string({
        required_error: "Please select a department.",
    }),
    status: z.enum(["active", "inactive"]),
});

interface UserFormDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (userData: any) => void;
    user?: any;
    roles: string[];
    departments: string[];
}

export function UserFormDialog({
    isOpen,
    onClose,
    onSubmit,
    user,
    roles,
    departments,
}: UserFormDialogProps) {
    const [formData, setFormData] = useState({
        id: 0,
        name: "",
        email: "",
        role: "",
        department: "",
        status: "active",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    // Reset form when dialog opens/closes or user changes
    useEffect(() => {
        if (isOpen) {
            if (user) {
                setFormData({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    department: user.department,
                    status: user.status,
                });
            } else {
                setFormData({
                    id: 0,
                    name: "",
                    email: "",
                    role: "User", // Default role
                    department: "",
                    status: "active",
                });
            }
            setErrors({});
        }
    }, [isOpen, user]);

    const handleChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });

        // Clear error for this field if it exists
        if (errors[field]) {
            const newErrors = { ...errors };
            delete newErrors[field];
            setErrors(newErrors);
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.role) {
            newErrors.role = "Role is required";
        }

        if (!formData.department) {
            newErrors.department = "Department is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user?.name || "",
            idNumber: "",
            email: user?.email || "",
            role: user?.role || "",
            department: user?.department || "",
            status: user?.status || "active",
        },
    });

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>
                        {user ? "Edit User" : "Add New User"}
                    </DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <div className="space-y-4 py-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="idNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ID Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter ID number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter email"
                                            type="email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a role" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {roles.map((role) => (
                                                <SelectItem
                                                    key={role}
                                                    value={role}
                                                >
                                                    {role}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

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
                                                <SelectValue placeholder="Select a department" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {departments.map((department) => (
                                                <SelectItem
                                                    key={department}
                                                    value={department}
                                                >
                                                    {department}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {user && (
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="active">
                                                    Active
                                                </SelectItem>
                                                <SelectItem value="inactive">
                                                    Inactive
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            onClick={form.handleSubmit(onSubmit)}
                        >
                            {user ? "Save changes" : "Create"}
                        </Button>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
