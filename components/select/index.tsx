import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Select = ({
  options,
  value,
  onChange,
  placeholder,
}: SelectProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (val: string) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <View style={styles.wrapper}>
      {/* Caixa fechada */}
      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setOpen((prev) => !prev)}
        activeOpacity={0.7}
      >
        <Text style={styles.selectedText}>
          {options.find((o) => o.value === value)?.label ||
            placeholder ||
            "Selecione..."}
        </Text>
        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={18}
          color="#fff"
        />
      </TouchableOpacity>

      {/* Lista de opções */}
      {open && (
        <View style={styles.dropdown}>
          <ScrollView style={{ maxHeight: 200 }}>
            {options.map((item) => {
              const isSelected = item.value === value;
              return (
                <TouchableOpacity
                  key={item.value}
                  style={[styles.option, isSelected && styles.optionSelected]}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      isSelected && styles.optionTextSelected,
                    ]}
                  >
                    {item.label}
                  </Text>
                  {isSelected && (
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};
