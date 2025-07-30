import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Banknote, Pencil, Repeat2 } from "lucide-react";

const BankAccount = () => {
    const [bankAccount, setBankAccount] = useState<any>(null);
    const [prevBankAccount, setPrevBankAccount] = useState<any>(null);
    const [changingBank, setChangingBank] = useState(false);
    const [formData, setFormData] = useState({
        holderName: "",
        bankName: "",
        accountNumber: "",
        ifsc: "",
    });
    const [editing, setEditing] = useState(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        setBankAccount(formData);
        setEditing(false);
    };

    const handleEdit = () => {
        setFormData(bankAccount);
        setEditing(true);
    };

    const handleChangeBank = () => {
        setPrevBankAccount(bankAccount); // keep a backup
        setFormData({ holderName: "", bankName: "", accountNumber: "", ifsc: "" });
        setEditing(true);
        setChangingBank(true);
    };

    const handleBack = () => {
        setBankAccount(prevBankAccount);
        setEditing(false);
        setChangingBank(false);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <SidebarProvider>
                <div className="flex flex-1 min-h-[calc(100vh-4rem)]">
                    <AppSidebar />
                    <main className="flex flex-col flex-1 p-6">
                        <h1 className="text-3xl font-bold text-foreground mb-6">My Bank Account</h1>

                        <Card className="max-w-xl w-full shadow-lg border rounded-2xl">
                            <CardHeader className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Banknote className="text-primary" />
                                    <CardTitle className="text-xl font-semibold">
                                        {editing ? "Add Bank Details" : "Linked Bank"}
                                    </CardTitle>
                                </div>
                                {editing && changingBank ? (
                                    <Button variant="outline" size="sm" onClick={handleBack}>
                                        ← Back
                                    </Button>
                                ) : !editing && (
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" onClick={handleEdit}>
                                            <Pencil className="w-4 h-4 mr-1" />
                                            Edit
                                        </Button>
                                        <Button variant="outline" size="sm" onClick={handleChangeBank}>
                                            <Repeat2 className="w-4 h-4 mr-1" />
                                            Change Bank
                                        </Button>
                                    </div>
                                )}
                            </CardHeader>

                            <CardContent className="space-y-4">
                                {editing ? (
                                    <form className="space-y-4">
                                        <div>
                                            <Label>Account Holder Name</Label>
                                            <Input
                                                name="holderName"
                                                value={formData.holderName}
                                                onChange={handleInputChange}
                                                placeholder="Enter name"
                                            />
                                        </div>
                                        <div>
                                            <Label>Bank Name</Label>
                                            <Input
                                                name="bankName"
                                                value={formData.bankName}
                                                onChange={handleInputChange}
                                                placeholder="Enter bank name"
                                            />
                                        </div>
                                        <div>
                                            <Label>Account Number</Label>
                                            <Input
                                                name="accountNumber"
                                                value={formData.accountNumber}
                                                onChange={handleInputChange}
                                                placeholder="Enter account number"
                                            />
                                        </div>
                                        <div>
                                            <Label>IFSC Code</Label>
                                            <Input
                                                name="ifsc"
                                                value={formData.ifsc}
                                                onChange={handleInputChange}
                                                placeholder="Enter IFSC"
                                            />
                                        </div>
                                        <Button className="w-full mt-2" onClick={handleSave}>
                                            Save
                                        </Button>
                                    </form>
                                ) : (
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div>
                                            <strong>Account Holder:</strong> {bankAccount.holderName}
                                        </div>
                                        <div>
                                            <strong>Bank Name:</strong> {bankAccount.bankName}
                                        </div>
                                        <div>
                                            <strong>Account Number:</strong> {bankAccount.accountNumber}
                                        </div>
                                        <div>
                                            <strong>IFSC Code:</strong> {bankAccount.ifsc}
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </main>
                </div>
            </SidebarProvider>
        </div>
    );
};

export default BankAccount;
