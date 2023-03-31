package com.nodo.final_spring.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity(name = "nhom_quyen_menu")
public class NhomQuyenMenu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @JoinColumn(name = "nhom_quyen_id")
    private NhomQuyen nhom_quyen;

    @ManyToOne
    @JoinColumn(name = "menu_item_id")
    private MenuItem menu_item;

    @JoinColumn(name = "right_id")
    @ManyToMany
    private List<Right> right_id;
}
